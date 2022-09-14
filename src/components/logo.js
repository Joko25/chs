/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';

export default function Logo({ src, ...rest }) {
  console.log("#logo", src)
  return (
    <Link
      path="/"
      sx={{
        variant: 'links.logo',
        display: 'flex',
        cursor: 'pointer',
        mr: 15
      }}
      {...rest}
    >
      <Image src={src} alt="Car Home Service logo" sx={styles.Image} />
      {/* carshomeservice.com */}
    </Link>
  );
}

const styles = {
  Image: {
    'height': '65px !important'
  },
};
