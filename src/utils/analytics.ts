import ReactGA from 'react-ga4';
import isProd from 'utils/is-prod';

type AnalyticsEvent = {
  action: string;
  category: string;
  label: string;
};

export const analyticsEvent = ({ action, category, label }: AnalyticsEvent) => {
  if (isProd()) {
    ReactGA.event({
      action,
      label,
      category,
    });
  }
};
