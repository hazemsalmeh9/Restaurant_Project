import { useTranslation } from "react-i18next";
import { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import layoutStyles from './PageShell.css?raw';
const navigationLinks = [{
  to: '/beneficiary',
  labelKey: 'navigation.beneficiaries'
}, {
  to: '/donations',
  labelKey: 'navigation.donations'
}, {
  to: '/restaurant',
  labelKey: 'navigation.restaurants'
}, {
  to: '/volunteer',
  labelKey: 'navigation.volunteering'
}];
function PageShell({
  title,
  bodyStyle = '',
  styles,
  children
}) {
  const {
    t,
    i18n
  } = useTranslation();
  useEffect(() => {
    document.title = title || 'Restaurants Project';
    document.body.setAttribute('style', bodyStyle.replace(/direction\s*:\s*(rtl|ltr)\s*;?/gi, ''));
    document.documentElement.lang = i18n.resolvedLanguage || i18n.language;
    document.documentElement.dir = i18n.dir();
    return () => document.body.removeAttribute('style');
  }, [bodyStyle, i18n, i18n.resolvedLanguage, title]);
  return <>
      <style>{[...styles, layoutStyles].join('\n')}</style>

      <header className="site-header">
        <div className="site-header__inner">
          <Link className="site-header__brand" to="/beneficiary" aria-label={t("pages.PageShell.text1")}>
            <span className="site-header__logo">
              <i className="fa-solid fa-hand-holding-heart" aria-hidden="true"></i>
            </span>
            <span>{t("pages.PageShell.text2")}</span>
          </Link>

          <nav className="site-header__nav" aria-label={t("pages.PageShell.text3")}>
            {navigationLinks.map(link => <NavLink key={link.to} className={({
            isActive
          }) => `site-header__link${isActive ? ' site-header__link--active' : ''}`} to={link.to}>
                {t(link.labelKey)}
              </NavLink>)}
          </nav>

          <div className="site-header__actions">
            <Link className="site-header__login" to="/login">{t("pages.PageShell.text4")}</Link>
            <Link className="site-header__register" to="/register">{t("pages.PageShell.text5")}</Link>
          </div>
        </div>
      </header>

      <div className="site-content">{children}</div>

      <footer className="site-footer">
        <div className="site-footer__inner">
          <div className="site-footer__main">
            <Link className="site-footer__brand" to="/beneficiary">
              <i className="fa-solid fa-hand-holding-heart" aria-hidden="true"></i>
              <span>{t("pages.PageShell.text6")}</span>
            </Link>
            <p>{t("pages.PageShell.text7")}</p>
          </div>

          <nav className="site-footer__links" aria-label={t("pages.PageShell.text8")}>
            {navigationLinks.map(link => <Link key={link.to} to={link.to}>{t(link.labelKey)}</Link>)}
          </nav>

          <div className="site-footer__bottom">
            <span>© {new Date().getFullYear()} {t("pages.PageShell.text9")}</span>
            <Link to="/login">{t("pages.PageShell.text10")}</Link>
          </div>
        </div>
      </footer>
    </>;
}
export default PageShell;
