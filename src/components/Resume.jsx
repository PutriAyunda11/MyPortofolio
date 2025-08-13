export default function Resume() {
  return (
    <section className="max-w-8xl mx-auto px-8 py-20 text-gray-800">
      <h1 className="text-3xl font-bold text-center mb-8 text-purple-700">
        Curriculum Vitae
      </h1>

      <div className="mb-6">
        <h2 className="text-xl font-semibold">Putri Ayunda Gustiara</h2>
        <p>Sukaraja, Cicendo, Kota Bandung, Jawa Barat</p>
        <p>
          Email:{" "}
          <a
            href="mailto:putriayundagustiara@gmail.com"
            className="text-blue-600 hover:underline"
          >
            putriayundagustiara@gmail.com
          </a>
        </p>
        <p>No. HP: 0838-8459-523</p>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-purple-600">
          Profil Singkat
        </h3>
        <p className="mt-2">
          Profesional di bidang teknologi informasi dengan keahlian pada
          pengembangan perangkat lunak, mencakup pemrograman front-end dan
          back-end. Berpengalaman dalam membangun antarmuka pengguna yang
          interaktif sekaligus mengelola logika dan basis data secara efisien.
          Memiliki kemampuan bekerja sama dalam tim maupun secara mandiri,
          adaptif terhadap teknologi baru, serta berkomitmen untuk terus
          mengembangkan kompetensi di industri IT yang dinamis.
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-purple-600">Pendidikan</h3>
        <ul className="list-disc ml-6 mt-2 space-y-2">
          <li>
            <strong>Universitas Nasional Pasim</strong> – D3 Manajemen
            Informatika
            <br />
            Bandung, 2023 – Sekarang
            <br />
            Sedang menempuh pendidikan tinggi dengan fokus pada pemrograman,
            sistem basis data, serta praktik pengembangan aplikasi berbasis web.
          </li>
          <li>
            <strong>Madrasah Aliyah Al-Fajar Kalapadua</strong> – Ilmu
            Pengetahuan Sosial (IPS)
            <br />
            Bandung, Lulus tahun 2023
            <br />
            Selama masa sekolah, aktif dalam berbagai kegiatan organisasi serta
            menunjukkan ketertarikan terhadap bidang teknologi dan informasi.
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-purple-600">
          Keahlian Teknis
        </h3>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>
            <strong>Bahasa Pemrograman:</strong> Mampu menulis dan memahami kode
            menggunakan React.js, Tailwind, Java, C, HTML, JavaScript, serta CSS
            untuk pengembangan aplikasi web maupun desktop.
          </li>
          <li>
            <strong>Database:</strong> Terbiasa menggunakan SQL (MySQL) dalam
            mengelola dan memanipulasi data untuk aplikasi berbasis data.
          </li>
          <li>
            <strong>Tools:</strong> Menggunakan Visual Studio Code sebagai text
            editor utama, serta memahami penggunaan Git dan GitHub untuk version
            control.
          </li>
          <li>
            <strong>Web Development:</strong> Memiliki pemahaman dasar mengenai
            pengembangan front-end dan back-end, mulai dari pembuatan antarmuka,
            pengolahan data, hingga integrasi API.
          </li>
          <li>
            <strong>Konsep:</strong> Familiar dengan konsep dasar seperti CRUD,
            OOP, REST API, serta pengembangan website modern berbasis front-end
            dan back-end.
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-purple-600">Bahasa</h3>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>
            <strong>Bahasa Indonesia</strong> — Aktif secara lisan maupun
            tulisan, serta mampu berkomunikasi dengan baik dalam lingkungan
            profesional maupun informal.
          </li>
          <li>
            <strong>Bahasa Inggris</strong> — Tingkat dasar, mampu memahami
            kosakata umum dan membaca dokumentasi sederhana terkait pemrograman.
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-purple-600">
          Catatan Tambahan
        </h3>
        <p className="mt-2">
          Saat ini saya sedang aktif mengembangkan beberapa proyek berbasis web
          menggunakan React, Tailwind, HTML, JavaScript, dan CSS, serta
          mengintegrasikan API eksternal untuk meningkatkan fungsionalitas
          aplikasi. Selain itu, saya juga aktif membuat API menggunakan bahasa
          pemrograman Java untuk mendukung pengembangan aplikasi. Saya memiliki
          ketertarikan yang tinggi pada bidang pemrograman, baik di sisi
          front-end maupun back-end. Terbuka untuk kesempatan bekerja penuh
          waktu atau kontrak yang dapat membantu mengasah keterampilan, menambah
          pengalaman, serta memperluas wawasan di industri teknologi.{" "}
        </p>
      </div>
    </section>
  );
}
