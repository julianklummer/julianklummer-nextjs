export const startQuery = `
    query getStart($locale: String!) {
        start(id: "5MfhT4f1JNw5mHawapWsbS", locale: $locale) {
            metaTitle,
            metaDescription,
            heroHeadline,
            heroSubline,
            about
        }
    }
`;
