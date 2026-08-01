"use client";

import { useState } from "react";
import {
  ClipboardList,
  UserCheck,
  UserCog,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const sections = [
  {
    id: "sop",
    title: "SOP Video Editing",
    description:
      "Alur proses jasa video editing dari reservasi hingga file akhir.",
    icon: ClipboardList,
  },
  {
    id: "reservasi",
    title: "Ketentuan Reservasi",
    description:
      "Ketentuan yang perlu diperhatikan sebelum melakukan reservasi.",
    icon: UserCheck,
  },
  {
    id: "klien",
    title: "Ketentuan Klien",
    description:
      "Hal-hal yang wajib diperhatikan oleh klien.",
    icon: ShieldCheck,
  },
  {
    id: "editor",
    title: "Ketentuan Editor",
    description:
      "Ketentuan dan tanggung jawab editor.",
    icon: UserCog,
  },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("sop");

  const scrollToSection = (id: string) => {
    setActiveSection(id);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="min-h-screen bg-base-100 text-base-content">

      {/* =========================================
          HERO
      ========================================= */}

      <section className="hero min-h-[70vh]">
        <div className="hero-content text-center px-5">
          <div className="max-w-3xl">

            <div className="badge badge-primary badge-lg mb-6">
              ASA DIGITAL SPACE
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              SOP & Ketentuan
            </h1>

            <p className="text-lg md:text-xl opacity-70 mt-6 leading-relaxed">
              Sebelum melakukan reservasi, pastikan kamu telah
              membaca, memahami, dan menyetujui seluruh ketentuan
              yang berlaku.
            </p>

            <button
              onClick={() => scrollToSection("sop")}
              className="btn btn-primary btn-lg mt-8"
            >
              Baca Ketentuan
              <ArrowRight size={20} />
            </button>

          </div>
        </div>
      </section>

      {/* =========================================
          NAVIGATION
      ========================================= */}

      <section className="px-5 pb-16">
        <div className="max-w-6xl mx-auto">

          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">

            {sections.map((section) => {
              const Icon = section.icon;
              const isActive = activeSection === section.id;

              return (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`
                    card
                    text-left
                    border
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? "bg-primary text-primary-content border-primary shadow-xl"
                        : "bg-base-200 border-base-300 hover:border-primary hover:-translate-y-1"
                    }
                  `}
                >
                  <div className="card-body">

                    <div
                      className={`
                        w-12
                        h-12
                        rounded-xl
                        flex
                        items-center
                        justify-center
                        ${
                          isActive
                            ? "bg-primary-content/20"
                            : "bg-primary text-primary-content"
                        }
                      `}
                    >
                      <Icon size={25} />
                    </div>

                    <h2 className="card-title mt-3">
                      {section.title}
                    </h2>

                    <p
                      className={
                        isActive
                          ? "opacity-80"
                          : "opacity-60"
                      }
                    >
                      {section.description}
                    </p>

                  </div>
                </button>
              );
            })}

          </div>

        </div>
      </section>

      {/* =========================================
          CONTENT
      ========================================= */}

      <section className="px-5 pb-24">
        <div className="max-w-4xl mx-auto">

          {/* =====================================
              SOP
          ===================================== */}

          <section
            id="sop"
            className="scroll-mt-8 card bg-base-200 border border-base-300 shadow-xl mb-8"
          >
            <div className="card-body">

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 shrink-0 rounded-xl bg-primary text-primary-content flex items-center justify-center">
                  <ClipboardList size={25} />
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-black">
                    SOP Jasa Video Editing
                  </h2>

                  <p className="opacity-60">
                    Standard Operating Procedure
                  </p>
                </div>

              </div>

              <div className="divider" />

              <div className="space-y-4">

                {/* 1 */}
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                  <input type="checkbox" />

                  <div className="collapse-title font-bold">
                    1. Persetujuan
                  </div>

                  <div className="collapse-content">
                    <p className="opacity-70 leading-relaxed">
                      Sebelum melakukan pemesanan atau reservasi jasa
                      video editing, klien wajib membaca, memahami, dan
                      menyetujui seluruh ketentuan yang berlaku.
                    </p>
                  </div>
                </div>

                {/* 2 */}
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                  <input type="checkbox" />

                  <div className="collapse-title font-bold">
                    2. Reservasi
                  </div>

                  <div className="collapse-content">
                    <p className="opacity-70 leading-relaxed">
                      Klien mengisi formulir reservasi dengan lengkap
                      sesuai detail proyek, kemudian mengirimkannya
                      kepada admin.
                    </p>
                  </div>
                </div>

                {/* 3 */}
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                  <input type="checkbox" />

                  <div className="collapse-title font-bold">
                    3. Review Harga
                  </div>

                  <div className="collapse-content">
                    <p className="opacity-70 leading-relaxed">
                      Setelah formulir diterima, admin akan melakukan
                      peninjauan dan memberikan estimasi biaya jasa
                      editing berdasarkan kebutuhan proyek.
                    </p>
                  </div>
                </div>

                {/* 4 */}
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                  <input type="checkbox" />

                  <div className="collapse-title font-bold">
                    4. Kesepakatan Harga
                  </div>

                  <div className="collapse-content">
                    <p className="opacity-70 leading-relaxed">
                      Setelah estimasi disetujui, proyek dinyatakan deal.
                      Untuk transaksi di atas Rp50.000, klien wajib
                      membayar uang muka (DP) sebelum proses editing dimulai.
                    </p>
                  </div>
                </div>

                {/* 5 */}
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                  <input type="checkbox" />

                  <div className="collapse-title font-bold">
                    5. Pengiriman Aset
                  </div>

                  <div className="collapse-content">
                    <p className="opacity-70 leading-relaxed">
                      Klien mengirimkan seluruh aset yang diperlukan,
                      seperti video, logo, naskah, rekaman suara, musik,
                      maupun materi pendukung lainnya.
                    </p>
                  </div>
                </div>

                {/* 6 */}
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                  <input type="checkbox" />

                  <div className="collapse-title font-bold">
                    6. Proses Editing
                  </div>

                  <div className="collapse-content">
                    <p className="opacity-70 leading-relaxed">
                      Editor mengerjakan proyek sesuai dengan brief dan
                      materi yang telah diberikan oleh klien.
                    </p>
                  </div>
                </div>

                {/* 7 */}
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                  <input type="checkbox" />

                  <div className="collapse-title font-bold">
                    7. Review & Revisi
                  </div>

                  <div className="collapse-content">
                    <p className="opacity-70 leading-relaxed">
                      Editor mengirimkan hasil editing tahap pertama
                      kepada klien untuk ditinjau. Revisi dilakukan
                      sesuai dengan ketentuan layanan yang berlaku.
                    </p>
                  </div>
                </div>

                {/* 8 */}
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                  <input type="checkbox" />

                  <div className="collapse-title font-bold">
                    8. Pelunasan
                  </div>

                  <div className="collapse-content">
                    <p className="opacity-70 leading-relaxed">
                      Setelah seluruh proses review dan revisi selesai
                      serta hasil akhir telah disetujui, klien wajib
                      melunasi sisa pembayaran.
                    </p>
                  </div>
                </div>

                {/* 9 */}
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                  <input type="checkbox" />

                  <div className="collapse-title font-bold">
                    9. Pengiriman Hasil Akhir
                  </div>

                  <div className="collapse-content">
                    <p className="opacity-70 leading-relaxed">
                      Setelah pembayaran lunas, editor akan mengirimkan
                      video final dengan kualitas Full HD tanpa watermark.
                    </p>
                  </div>
                </div>

                {/* 10 */}
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                  <input type="checkbox" />

                  <div className="collapse-title font-bold">
                    10. Penyimpanan File
                  </div>

                  <div className="collapse-content">
                    <p className="opacity-70 leading-relaxed">
                      File proyek dan hasil akhir akan disimpan di
                      Google Drive selama 7 (tujuh) hari sejak video
                      dikirim kepada klien. Setelah masa penyimpanan
                      berakhir, file akan dihapus secara permanen.
                      Klien diharapkan segera mengunduh dan menyimpan
                      file tersebut.
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </section>

          {/* =====================================
              KETENTUAN RESERVASI
          ===================================== */}

          <section
            id="reservasi"
            className="scroll-mt-8 card bg-base-200 border border-base-300 shadow-xl mb-8"
          >
            <div className="card-body">

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 shrink-0 rounded-xl bg-primary text-primary-content flex items-center justify-center">
                  <UserCheck size={25} />
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-black">
                    Ketentuan Reservasi
                  </h2>

                  <p className="opacity-60">
                    Ketentuan sebelum melakukan reservasi
                  </p>
                </div>

              </div>

              <div className="divider" />

              <div className="space-y-3">

                <div className="alert bg-base-100 border border-base-300">
                  <span>
                    Dengan melakukan reservasi, klien dianggap telah
                    membaca, memahami, dan menyetujui seluruh SOP serta
                    ketentuan layanan yang berlaku.
                  </span>
                </div>

                <div className="alert bg-base-100 border border-base-300">
                  <span>
                    Seluruh proses, mulai dari reservasi hingga pelunasan,
                    mengikuti SOP yang telah ditetapkan demi menjaga
                    keamanan dan kenyamanan transaksi bagi klien maupun
                    editor.
                  </span>
                </div>

                <div className="alert bg-base-100 border border-base-300">
                  <span>
                    Tidak menerima proyek dengan deadline kurang dari
                    24 jam.
                  </span>
                </div>

                <div className="alert bg-base-100 border border-base-300">
                  <span>
                    Tidak menerima proyek yang mengandung watermark,
                    promosi, atau unsur judi online, serta konten yang
                    melanggar hukum atau bersifat menyesatkan.
                  </span>
                </div>

                <div className="alert bg-base-100 border border-base-300">
                  <span>
                    Paket Basic dan Pro mengharuskan klien memiliki
                    konsep atau briefing yang jelas sebelum proses
                    editing dimulai.
                  </span>
                </div>

                <div className="alert bg-base-100 border border-base-300">
                  <span>
                    Reservasi tetap dibuka pada hari Sabtu dan Minggu,
                    namun proses pengerjaan akan dimulai pada hari kerja
                    berikutnya.
                  </span>
                </div>

                <div className="alert bg-base-100 border border-base-300">
                  <span>
                    Klien wajib membaca seluruh ketentuan yang tercantum
                    pada halaman ini dan highlist instagram{" "}
                    <strong>@asadigitals_</strong> sebelum melakukan
                    reservasi.
                  </span>
                </div>

              </div>

            </div>
          </section>

          {/* =====================================
              KETENTUAN KLIEN
          ===================================== */}

          <section
            id="klien"
            className="scroll-mt-8 card bg-base-200 border border-base-300 shadow-xl mb-8"
          >
            <div className="card-body">

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 shrink-0 rounded-xl bg-primary text-primary-content flex items-center justify-center">
                  <ShieldCheck size={25} />
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-black">
                    Ketentuan Klien
                  </h2>

                  <p className="opacity-60">
                    Ketentuan yang berlaku bagi klien
                  </p>
                </div>

              </div>

              <div className="divider" />

              <div className="space-y-3">

                <div className="alert bg-base-100 border border-base-300">
                  <span>
                    Pergantian lagu setelah proses editing dimulai tidak
                    dapat dilakukan. Apabila tetap ingin mengganti lagu,
                    perubahan tersebut akan dianggap sebagai proyek baru
                    atau dikenakan biaya tambahan.
                  </span>
                </div>

                <div className="alert bg-base-100 border border-base-300">
                  <span>
                    Permintaan percepatan deadline tidak tersedia.
                    Apabila membutuhkan prioritas pengerjaan, klien
                    dapat memilih layanan Fast Track.
                  </span>
                </div>

                <div className="alert bg-base-100 border border-base-300">
                  <span>
                    Transaksi di atas Rp50.000 wajib membayar DP minimal
                    50% sebelum proyek dikerjakan.
                  </span>
                </div>

                <div className="alert bg-base-100 border border-base-300">
                  <span>
                    Seluruh aset proyek wajib diunggah ke Google Drive
                    dan diberi nama yang jelas agar memudahkan proses
                    editing.
                  </span>
                </div>

                <div className="alert bg-base-100 border border-base-300">
                  <span>
                    Briefing yang telah disetujui tidak dapat diubah di
                    tengah proses pengerjaan. Perubahan konsep akan
                    dianggap sebagai revisi mayor atau proyek baru.
                  </span>
                </div>

                <div className="alert bg-base-100 border border-base-300">
                  <span>
                    Klien wajib melunasi sisa pembayaran sebelum video
                    final tanpa watermark dikirimkan.
                  </span>
                </div>

              </div>

            </div>
          </section>

          {/* =====================================
              KETENTUAN EDITOR
          ===================================== */}

          <section
            id="editor"
            className="scroll-mt-8 card bg-base-200 border border-base-300 shadow-xl"
          >
            <div className="card-body">

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 shrink-0 rounded-xl bg-primary text-primary-content flex items-center justify-center">
                  <UserCog size={25} />
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-black">
                    Ketentuan Editor
                  </h2>

                  <p className="opacity-60">
                    Ketentuan dan tanggung jawab editor
                  </p>
                </div>

              </div>

              <div className="divider" />

              <div className="space-y-3">

                <div className="alert bg-base-100 border border-base-300">
                  <span>
                    Wajib menyelesaikan proyek sesuai deadline yang
                    telah disepakati.
                  </span>
                </div>

                <div className="alert bg-base-100 border border-base-300">
                  <span>
                    Menjaga kerahasiaan seluruh data dan aset milik
                    klien.
                  </span>
                </div>

                <div className="alert bg-base-100 border border-base-300">
                  <span>
                    Mengerjakan video sesuai briefing dan materi yang
                    telah diberikan.
                  </span>
                </div>

                <div className="alert bg-base-100 border border-base-300">
                  <span>
                    Menerima revisi sesuai dengan batas revisi pada
                    paket yang dipilih.
                  </span>
                </div>

                <div className="alert bg-base-100 border border-base-300">
                  <span>
                    Berhak menolak proyek yang bertentangan dengan
                    hukum, etika, atau kebijakan layanan dengan
                    memberikan penjelasan kepada klien.
                  </span>
                </div>

                <div className="alert bg-base-100 border border-base-300">
                  <span>
                    File proyek dan hasil akhir akan disimpan selama
                    7 hari setelah video final dikirim. Setelah masa
                    penyimpanan berakhir, file dapat dihapus secara
                    permanen.
                  </span>
                </div>

              </div>

            </div>
          </section>

        </div>
      </section>

      {/* =========================================
          FOOTER
      ========================================= */}

      <footer className="border-t border-base-300">

        <div className="max-w-6xl mx-auto px-5 py-8 text-center">

          <p className="font-bold">
            Asa Digital Space
          </p>

          <p className="text-sm opacity-50 mt-1">
            Dream, Imagine, and Make it True!
          </p>

        </div>

      </footer>

    </main>
  );
}