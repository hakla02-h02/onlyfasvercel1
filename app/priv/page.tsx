import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Priv | Conteúdo exclusivo",
  description: "Acesso a álbuns e conteúdos exclusivos.",
}

const coverImage =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4936166533197663844-cJ8nMNrFT1biLSzOvJThzRP8AcCt0v.jpg"
const profileImage =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/790059490_18083216771471493_7120741971286687762_n-SLGBqGlxNyssD7kbPz18TJjJrsny9c.jpg"

const offers = [
  {
    title: "Álbum VIP total",
    description: "Mais vendido · Todos os álbuns abaixo inclusos neste pacote",
    price: "R$ 27,99",
    oldPrice: "R$ 127,99",
    accent: "VIP",
  },
  {
    title: "Álbum exclusivo",
    description: "Conteúdo selecionado para você",
    price: "R$ 16,99",
    accent: "EXCLUSIVO",
  },
  {
    title: "Pacote básico",
    description: "Com poucas fotos",
    price: "R$ 7,99",
    accent: "BÁSICO",
  },
]

export default function PrivPage() {
  return (
    <main className="min-h-screen bg-[#f3f6fc] px-4 py-7 text-[#07142f]">
      <section className="mx-auto w-full max-w-[720px] overflow-hidden rounded-[28px] bg-white shadow-sm">
        <div className="relative h-[165px] overflow-hidden bg-[#d8dce4]">
          <img src={coverImage} alt="Capa do perfil" className="h-full w-full object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10" />
          <img
            src={profileImage}
            alt="Foto do perfil"
            className="absolute bottom-[-34px] left-1/2 h-[104px] w-[104px] -translate-x-1/2 rounded-full border-[7px] border-white object-cover"
          />
        </div>

        <div className="px-5 pb-8 pt-12 text-center sm:px-10">
          <h1 className="mx-auto max-w-[620px] text-[27px] font-black leading-[1.42] tracking-[-0.03em] sm:text-[34px]">
            ⚡ PROMOÇÃO RELÂMPAGO, VÁLIDO ATÉ AS 23:00H 🔥 ⏰ ⌛ — VAGAS LIMITADAS PARA OS 100 PRIMEIROS 💎
          </h1>
          <p className="mt-3 text-[22px] font-extrabold leading-tight sm:text-[29px]">PACOTE VIP com 60% OFF 💎 🎁 + Bônus</p>
          <p className="mt-2 text-[19px] font-bold sm:text-[25px]">especial NO PRIMEIRO ÁLBUM! 📸</p>
          <p className="mt-5 text-[25px] font-extrabold sm:text-[31px]">Conteúdo novo todos os dias</p>
          <p className="mt-1 text-lg">Fotos todos os dias</p>

          <div className="mt-7 space-y-5 text-left">
            {offers.map((offer) => (
              <Link
                key={offer.title}
                href="/priv"
                className="group flex min-h-[100px] items-center gap-4 rounded-2xl border border-black/[0.04] bg-white px-4 py-4 shadow-[0_5px_18px_rgba(0,0,0,0.10)] transition hover:-translate-y-0.5 hover:shadow-[0_8px_22px_rgba(0,0,0,0.14)]"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#b29acb] to-[#ecd9ee] text-center text-[10px] font-black uppercase text-white">
                  {offer.accent}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-base font-extrabold leading-tight sm:text-lg">{offer.title}</p>
                  <p className="mt-1 text-sm font-semibold leading-snug sm:text-base">{offer.description}</p>
                  {offer.oldPrice && <p className="mt-1 text-sm font-semibold">De {offer.oldPrice} por uma oferta especial</p>}
                </div>
                <div className="shrink-0 text-right text-base font-black sm:text-lg">{offer.price}</div>
              </Link>
            ))}

            <Link
              href="/priv"
              className="flex min-h-[76px] items-center justify-between rounded-2xl border-2 border-[#f0008c] px-4 text-[#e50086] shadow-[0_3px_12px_rgba(240,0,140,0.15)] transition hover:bg-[#fff4fb]"
            >
              <span className="text-lg font-extrabold">Enviar presentinho</span>
              <span aria-hidden="true" className="text-3xl">+</span>
            </Link>
          </div>

          <p className="mt-8 text-2xl font-black text-[#f0008c]">Priv</p>
        </div>
      </section>
    </main>
  )
}
