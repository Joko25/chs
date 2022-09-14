/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Smart from 'assets/feature/smart.svg';
import Winner from 'assets/feature/winner.svg';
import Cloud from 'assets/feature/cloud.svg';
import Setting from 'assets/feature/setting.svg';
import Design from 'assets/feature/design.svg';
import Chat from 'assets/feature/chat.svg';

const data = [
  {
    id: 1,
    imgSrc: Smart,
    altText: 'Smart',
    title: 'Mekanik',
    text:
      'Service Advisor dan mekanik yang ramah serta berpengalaman siap melayani anda dengan berbagai keluhan dan masalah soal kendaraan',
  },
  {
    id: 2,
    imgSrc: Winner,
    altText: 'Performance',
    title: 'Ruang Tunggu & Toilet',
    text:
      'Selain memberikan ruang tunggu dan toilet, kami juga menyediakan minuman ringan seperti air mineral, teh dan kopi',
  },
  {
    id: 3,
    imgSrc: Cloud,
    altText: 'Content',
    title: 'Layanan Panggilan',
    text:
      'Untuk memberikan pengalaman berbeda, kami hadir dengan layanan mobil service dengan waktu yang anda tentukan ',
  },
  {
    id: 4,
    imgSrc: Setting,
    altText: 'Customization',
    title: 'Emergency 24 Jam',
    text:
      'Untuk Memberikan rasa aman, kami hadir dengan layanan 24 Jam.',
  },
  {
    id: 5,
    imgSrc: Design,
    altText: 'Productivity',
    title: 'Peralatan',
    text:
      'Selain peralatan standard bengkel, kami juda menyediakan alat press untuk melakukan pengepressan seperti pergantian Bearing, Bushing arm dll',
  },
  {
    id: 6,
    imgSrc: Chat,
    altText: 'Support',
    title: 'IT Testern (Scanner)',
    text:
      'Alat untuk mendiagnosa dan menemukan masalah kendaraan supaya terdeteksi dengan cepat, tepat dan sempurna',
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: 'section.feature' }}>
      <Container>
        <SectionHeader
          slogan="Fasilitas Kami"
          title="Fasilitas terbaik kami berikan kepada anda."
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: [
      '37px 0',
      null,
      '45px 30px',
      null,
      '50px 30px',
      null,
      null,
      '90px 70px',
    ],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
