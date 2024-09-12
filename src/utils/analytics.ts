import ReactGA from 'react-ga4';

type AnalyticsEvent = {
  action: string;
  category: string;
  label: string;
};

export const analyticsEvent = ({ action, category, label }: AnalyticsEvent) => {
  if (import.meta.env.PROD) {
    ReactGA.event({
      action,
      label,
      category,
    });
  }
};
