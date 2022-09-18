/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Vector from 'assets/key-feature/vector.svg';
import Editing from 'assets/key-feature/editing.svg';
import Speed from 'assets/key-feature/speed.svg';

const data = [
  {
    id: 1,
    imgSrc: Vector,
    altText: 'perawatan berkala',
    title: 'Perawatan Berkala',
    text:
      'Tidak udah kawatir masalah jadwal kesibukan anda kami datang untuk mempermudah perawatan berkala anda dimanapun dan kapanpun',
  },
  {
    id: 2,
    imgSrc: Editing,
    altText: 'tuneup',
    title: 'Engine Tuneup',
    text:
      'Kami akan meningkatkan Performa mobil anda  sesuai kebutuhan yang anda harapkan',
  },
  {
    id: 3,
    imgSrc: Speed,
    altText: 'rapair',
    title: 'General Repair',
    text:
      'di satu sisi kami menyediakan mekanik - mekanik yang handal jujur dan terpaca untuk menangani keluhanan masalah mobil anda',
  },
  {
    id: 4,
    imgSrc: Vector,
    altText: 'kopling',
    title: 'Kopling',
    text:
      'pastikan kenyamanan mobil anda dengan penyetelan kopling secara benar',
  },
  {
    id: 5,
    imgSrc: Editing,
    altText: 'overhaul',
    title: 'Over Haul',
    text:
      'Tanpa Perlu ragu untuk mempercayakan perbaikan Overhaul kepada kami ditunjang mekanik yang kopetendan jujur membuat kepercayaan terjamin',
  },
  {
    id: 6,
    imgSrc: Speed,
    altText: 'scanner',
    title: 'Scanner',
    text:
      'kami memiliki alat yang dengan cepat menganalisa keadaan mobil anda secara akurat dan cepat ',
  },
  {
    id: 7,
    imgSrc: 'Vector',
    altText: 'suspensi',
    title: 'Suspensi & Rem',
    text:
      'tidak lupa untuk memastikan suspensi dan kontrol rem dengan baik dan benar',
  },
  {
    id: 7,
    imgSrc: Editing,
    altText: 'rocksteer',
    title: 'Install & Repair Rock Steer (Power Steering)',
    text:
      'dan perbaikan serta penggantian yang menjamin kepuasan anda',
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: 'section.keyFeature' }} id="feature">
      <Container>
        <SectionHeader
          slogan="Layanan"
          title="Dapatkan pelayanan terbaik kami"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
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
    px: [0, null, null, '40px', null, '80px'],
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: ['35px 0', null, '40px 0'],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    '& > div': {
      px: [0, '15px', null, '25px', null, '30px', '40px', '60px'],
    },
  },
};
