"use client";

import {
  ClipboardList,
  UserCheck,
  ShieldCheck,
  UserCog,
} from "lucide-react";

const sopItems = [
  {
    title: "1. Persetujuan",
    text: "Sebelum melakukan pemesanan atau reservasi jasa video editing, klien wajib membaca, memahami, dan menyetujui seluruh ketentuan yang berlaku.",
  },
  {
    title: "2. Reservasi",
    text: "Klien mengisi formulir reservasi dengan lengkap sesuai detail proyek, kemudian mengirimkannya kepada admin.",
  },
  {
    title: "3. Review Harga",
    text: "Setelah formulir diterima, admin akan melakukan peninjauan dan memberikan estimasi biaya jasa editing berdasarkan kebutuhan proyek.",
  },
  {
    title: "4. Kesepakatan Harga",
    text: "Setelah estimasi disetujui, proyek dinyatakan deal. Untuk transaksi di atas Rp50.000, klien wajib membayar uang muka (DP) sebelum proses editing dimulai.",
  },
  {
    title: "5. Pengiriman Aset",
    text: "Klien mengirimkan seluruh aset yang diperlukan, seperti video, logo, naskah, rekaman suara, musik, maupun materi pendukung lainnya.",
  },
  {
    title: "6. Proses Editing",
    text: "Editor mengerjakan proyek sesuai dengan brief dan materi yang telah diberikan oleh klien.",
  },
  {
    title: "7. Review & Revisi",
    text: "Editor mengirimkan hasil editing tahap pertama kepada klien untuk ditinjau. Revisi dilakukan sesuai dengan ketentuan layanan yang berlaku.",
  },
  {
    title: "8. Pelunasan",
    text: "Setelah seluruh proses review dan revisi selesai serta hasil akhir telah disetujui, klien wajib melunasi sisa pembayaran.",
  },
  {
    title: "9. Pengiriman Hasil Akhir",
    text: "Setelah pembayaran lunas, editor akan mengirimkan video final dengan kualitas Full HD tanpa watermark.",
  },
  {
    title: "10. Penyimpanan File",
    text: "File proyek dan hasil akhir akan disimpan di Google Drive selama 7 (tujuh) hari sejak video dikirim kepada klien. Setelah masa penyimpanan berakhir, file akan dihapus secara permanen. Klien diharapkan segera mengunduh dan menyimpan file tersebut.",
  },
];

const reservasiItems = [
  "Dengan melakukan reservasi, klien dianggap telah membaca, memahami, dan menyetujui seluruh SOP serta ketentuan layanan yang berlaku.",
  "Seluruh proses, mulai dari reservasi hingga pelunasan, mengikuti SOP yang telah ditetapkan demi menjaga keamanan dan kenyamanan transaksi bagi klien maupun editor.",
  "Tidak menerima proyek dengan deadline kurang dari 24 jam.",
  "Tidak menerima proyek yang mengandung watermark, promosi, atau unsur judi online, serta konten yang melanggar hukum atau bersifat menyesatkan.",
  "Paket Basic dan Pro mengharuskan klien memiliki konsep atau briefing yang jelas sebelum proses editing dimulai.",
  "Reservasi tetap dibuka pada hari Sabtu dan Minggu, namun proses pengerjaan akan dimulai pada hari kerja berikutnya.",
  "Klien wajib membaca seluruh ketentuan yang tercantum pada sorotan Instagram @asadigitals_ sebelum melakukan reservasi.",
];

const klienItems = [
  "Pergantian lagu setelah proses editing dimulai tidak dapat dilakukan. Apabila tetap ingin mengganti lagu, perubahan tersebut akan dianggap sebagai proyek baru atau dikenakan biaya tambahan.",
  "Permintaan percepatan deadline tidak tersedia. Apabila membutuhkan prioritas pengerjaan, klien dapat memilih layanan Fast Track.",
  "Transaksi di atas Rp50.000 wajib membayar DP minimal 50% sebelum proyek dikerjakan.",
  "Seluruh aset proyek wajib diunggah ke Google Drive dan diberi nama yang jelas agar memudahkan proses editing.",
  "Briefing yang telah disetujui tidak dapat diubah di tengah proses pengerjaan. Perubahan konsep akan dianggap sebagai revisi mayor atau proyek baru.",
  "Klien wajib melunasi sisa pembayaran sebelum video final tanpa watermark dikirimkan.",
];

const editorItems = [
  "Wajib menyelesaikan proyek sesuai deadline yang telah disepakati.",
  "Menjaga kerahasiaan seluruh data dan aset milik klien.",
  "Mengerjakan video sesuai briefing dan materi yang telah diberikan.",
  "Menerima revisi sesuai dengan batas revisi pada paket yang dipilih.",
  "Berhak menolak proyek yang bertentangan dengan hukum, etika, atau kebijakan layanan dengan memberikan penjelasan kepada klien.",
  "File proyek dan hasil akhir akan disimpan selama 7 hari setelah video final dikirim. Setelah masa penyimpanan berakhir, file dapat dihapus secara permanen.",
];

function GlassCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`
        rounded-[2rem]
        border-2
        border-white/40
        bg-white/[0.12]
        backdrop-blur-xl
        shadow-[0_20px_60px_rgba(0,0,0,0.20)]
        ${className}
      `}
    >
      {children}
    </div>
  );
}

function SectionHeader({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="mb-8 flex items-center justify-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/30 bg-white/15">
        {icon}
      </div>

      <h2 className="text-center text-2xl font-semibold tracking-wide md:text-3xl">
        {title}
      </h2>
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-5 text-base leading-relaxed md:text-lg">
      {items.map((item, index) => (
        <li key={index} className="flex gap-4">
          <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-white" />

          <span className="text-white/95">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#062b63] text-white">

      {/* =========================================
          BACKGROUND
      ========================================= */}

      <div className="fixed inset-0 -z-0 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-[#062b63] via-[#073e87] to-[#00c9d8]" />

        <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-cyan-400/20 blur-[120px]" />

        <div className="absolute -right-40 top-[35%] h-[600px] w-[600px] rounded-full bg-blue-500/30 blur-[140px]" />

        <div className="absolute bottom-[-200px] left-[20%] h-[500px] w-[500px] rounded-full bg-cyan-400/20 blur-[130px]" />

      </div>

      <div className="relative z-10">

        {/* =====================================
            HERO
        ===================================== */}

        <section className="px-5 pb-16 pt-20 md:pt-28">

          <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">

            <p className="mb-5 text-sm font-bold tracking-[0.35em] text-white/70 md:text-base">
              ASA DIGITAL SPACE
            </p>

            <h1
              className="
                w-full
                text-center
                text-4xl
                font-black
                uppercase
                leading-tight
                tracking-tight
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
              "
            >
              Terms
              <span className="mx-2 md:mx-4">
                &
              </span>
              Condition
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-center text-sm font-semibold uppercase leading-relaxed text-white/85 md:text-lg">
              Ketentuan dan kesepakatan antara klien dan freelancer
              dalam suatu project.
            </p>

          </div>

        </section>

        {/* =====================================
            SOP
        ===================================== */}

        <section className="px-5 pb-10">

          <div className="mx-auto max-w-5xl">

            <GlassCard className="p-6 md:p-10">

              <SectionHeader
                icon={<ClipboardList size={22} />}
                title="SOP Jasa Video Editing"
              />

              <div className="space-y-3">

                {sopItems.map((item) => (
                  <div
                    key={item.title}
                    className="
                      collapse
                      collapse-arrow
                      border
                      border-white/20
                      bg-black/10
                      backdrop-blur-sm
                      transition-all
                      duration-300
                      hover:bg-white/10
                    "
                  >

                    <input type="checkbox" />

                    <div className="collapse-title text-base font-bold md:text-lg">
                      {item.title}
                    </div>

                    <div className="collapse-content">

                      <p className="pt-2 text-sm leading-relaxed text-white/75 md:text-base">
                        {item.text}
                      </p>

                    </div>

                  </div>
                ))}

              </div>

            </GlassCard>

          </div>

        </section>

        {/* =====================================
            KETENTUAN RESERVASI
        ===================================== */}

        <section className="px-5 py-10">

          <div className="mx-auto max-w-5xl">

            <GlassCard className="p-6 md:p-10">

              <SectionHeader
                icon={<UserCheck size={22} />}
                title="Ketentuan Reservasi"
              />

              <BulletList items={reservasiItems} />

            </GlassCard>

          </div>

        </section>

        {/* =====================================
            KETENTUAN KLIEN
        ===================================== */}

        <section className="px-5 py-10">

          <div className="mx-auto max-w-5xl">

            <GlassCard className="p-6 md:p-10">

              <SectionHeader
                icon={<ShieldCheck size={22} />}
                title="Ketentuan Klien"
              />

              <BulletList items={klienItems} />

            </GlassCard>

          </div>

        </section>

        {/* =====================================
            KETENTUAN EDITOR
        ===================================== */}

        <section className="px-5 py-10">

          <div className="mx-auto max-w-5xl">

            <GlassCard className="p-6 md:p-10">

              <SectionHeader
                icon={<UserCog size={22} />}
                title="Ketentuan Editor"
              />

              <BulletList items={editorItems} />

            </GlassCard>

          </div>

        </section>

        {/* =====================================
            FOOTER
        ===================================== */}

        <footer className="px-5 pb-10 pt-16">

          <div className="mx-auto max-w-5xl text-center">

            <div className="mb-5 h-px bg-white/20" />

            <p className="text-sm font-bold tracking-widest">
              ASA DIGITAL SPACE
            </p>

            <p className="mt-2 text-xs text-white/50">
              Dream, Imagine, and Make it True!
            </p>

          </div>

        </footer>

      </div>

    </main>
  );
}