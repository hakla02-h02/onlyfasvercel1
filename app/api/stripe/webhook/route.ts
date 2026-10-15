import { NextResponse } from "next/server"
import Stripe from "stripe"
import { getStripe } from "@/lib/stripe/server"

export const runtime = "nodejs"

export async function POST(request: Request) {
  const signature = request.headers.get("stripe-signature")
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

  if (!signature || !webhookSecret) {
    return NextResponse.json({ error: "Webhook Stripe não configurado." }, { status: 400 })
  }

  let event: Stripe.Event
  try {
    const payload = await request.text()
    event = getStripe().webhooks.constructEvent(payload, signature, webhookSecret)
  } catch (error) {
    console.error("[stripe-webhook] assinatura inválida", error)
    return NextResponse.json({ error: "Assinatura inválida." }, { status: 400 })
  }

  if (event.type === "invoice.paid" || event.type === "checkout.session.completed") {
    const resource = event.data.object as Stripe.Invoice | Stripe.Checkout.Session
    const metadata = resource.metadata ?? {}

    // $9 e downsell são somente pagamento, sem entrega por webhook.
    // gp-en libera apenas os planos de $25 e $41; gp-en2 recebe o entregável.
    const shouldFulfill =
      metadata.fulfillmentEnabled === "true" &&
      metadata.planId !== "1m" &&
      metadata.planId !== "offer"

    if (shouldFulfill) {
      console.log("[stripe-webhook] pagamento aprovado para entrega", {
        eventId: event.id,
        planId: metadata.planId,
        flow: metadata.flow,
        deliverableUrl: metadata.deliverableUrl,
      })
    }
  }

  return NextResponse.json({ received: true })
}

export async function GET() {
  return NextResponse.json({ endpoint: "stripe-webhook", status: "active" })
}
