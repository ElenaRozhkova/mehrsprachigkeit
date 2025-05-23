// components/Header.js
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

const Header = () => {
    const router = useRouter();
    const { t } = useTranslation('common');
    const { locale, locales, pathname, asPath, query } = router;

    return (
        <header style={styles.header}>
            <div style={styles.logo}>🌍 MySite</div>
            <nav>
                {locales.map((lng) => (
                    <Link
                        key={lng}
                        href={{ pathname, query }}
                        as={asPath}
                        locale={lng}
                        legacyBehavior
                    >
                        <a style={lng === locale ? styles.activeLang : styles.lang}>{lng.toUpperCase()}</a>
                    </Link>
                ))}
            </nav>
        </header>
    );
};

const styles = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '1rem 2rem',
        background: '#f0f0f0',
        alignItems: 'center',
    },
    logo: {
        fontWeight: 'bold',
        fontSize: '1.5rem',
    },
    lang: {
        marginLeft: '1rem',
        textDecoration: 'none',
        color: '#555',
    },
    activeLang: {
        marginLeft: '1rem',
        textDecoration: 'underline',
        color: '#000',
        fontWeight: 'bold',
    },
};

export default Header;
