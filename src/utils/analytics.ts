declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void;
    dataLayer: unknown[];
  }
}

export const trackEvent = (
  eventName: string,
  parameters?: Record<string, unknown>
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-RCGRH3NVP8', {
      page_path: url,
    });
  }
};

export const trackProjectView = (projectName: string) => {
  trackEvent('project_view', {
    project_name: projectName,
  });
};

export const trackContactClick = (method: string) => {
  trackEvent('contact_click', {
    contact_method: method,
  });
};
