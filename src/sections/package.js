/** @jsx jsx */
import { jsx, Container, Flex } from 'theme-ui';
import PriceCard from 'components/price-card';
import SectionHeader from 'components/section-header';
import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io';
import PatternBG from 'assets/patternBG.png';

const packages = [
  {
    name: 'Engine Component',
    description: 'For Small teams or office',
    buttonText: 'Order Sekarang',
    points: [
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Ultimate access to all course, exercises and assessments',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text:
          'Free access for all kind of exercise corrections with downloads.',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Total assessment corrections with free download access system',
        isAvailable: true,
      },
      {
        icon: <IoIosCloseCircle />,
        text: 'Unlimited download of courses on the mobile app contents',
        isAvailable: false,
      },
      {
        icon: <IoIosCloseCircle />,
        text: 'Download and print courses and exercises in PDF',
        isAvailable: false,
      },
    ],
  },
  {
    header: 'Best Deal',
    name: 'Periodic Maintenance',
    description: 'untuk kendaraan kecil',
    priceWithUnit: 'Rp.150.000',
    buttonText: 'Order Sekarang',
    points: [
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'PM Kelipatan 10.000KM',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text:
          'PM Kelipatan 20.000KM',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'PM Kelipatan 40.000KM',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Engine Tuneup',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Complete Engine Oil',
        isAvailable: true,
      },
    ],
    
  },{
    header: 'Recomended',
    name: 'Layanan Lain-nya',
    description: 'Banyak hal yang dapat kami lakukan',
    buttonText: 'Daftar Harga',
    
  },
];
export default function Package() {
  return (
    <section id="pricing" sx={styles.pricing}>
      <Container>
        <SectionHeader
          title="Harga yg tertampil adalah gambaran besarnya"
          slogan="harga yg kami berikan"
          isWhite={true}
        />
        <Flex
          sx={{
            justifyContent: 'center',
            flexWrap: ['wrap', null, null, 'nowrap'],
          }}
        >
          {packages.map((packageData) => (
            <PriceCard data={packageData} key={packageData.name} />
          ))}
        </Flex>
      </Container>
    </section>
  );
}

const styles = {
  pricing: {
    backgroundColor: '#0C2439',
    backgroundImage: `url(${PatternBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    py: [8, null, 9, null, null, 10],
    position: 'relative',
    '&::before': {
      position: 'absolute',
      content: '""',
      top: 0,
      right: 0,
      background:
        'linear-gradient(-45deg, rgba(42,72,125, 0.3) 25%, transparent 25%, transparent 50%, rgba(42,72,125, 0.3) 50%, rgba(42,72,125, 0.3) 75%, transparent 75%, transparent)',
      width: '100%',
      backgroundSize: '350px 350px',
      height: '100%',
      opacity: 0.3,
      zIndex: 0,
    },
  },
};
