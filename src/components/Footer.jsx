import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="border-t border-line py-8 text-center text-sm text-muted">
      <p>
        © {new Date().getFullYear()} Antonio Valdez Aguayo · {t('footer.built')}
      </p>
    </footer>
  );
}
