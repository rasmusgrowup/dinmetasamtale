async function fetchAPI(query, { variables, preview } = {}) {
    const res = await fetch(process.env.ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${
                preview || process.env.development
                    ? process.env.DEV_TOKEN
                    : process.env.PROD_TOKEN
            }`,
        },
        body: JSON.stringify({
            query,
            variables,
        }),
    })
    const json = await res.json()

    if (json.errors) {
        console.error(json.errors)
        throw new Error('Failed to fetch API')
    }

    return json.data
}

export async function getAllSlugs() {
    const data = await fetchAPI(`
    {
      pages(where: {NOT: {slug: "home"}}) {
        id
        slug
      }
    }
  `)
    return data.pages
}

export async function getPage(slug) {
    const { page } = await fetchAPI(
    `
            query homePage($slug: String!) {
                page(where: {slug: $slug}) {
                    id
                    header {
                        logo {
                            altText
                            image {
                                height
                                width
                                url
                            }
                        }
                        nav {
                            id
                            navItems {
                                ... on Button {
                                    __typename
                                    id
                                    link
                                    text
                                }
                                ... on NavItem {
                                    __typename
                                    id
                                    text
                                    page {
                                        slug
                                    }
                                }
                            }
                        }
                    }
                    sections {
                        ... on HeroSection {
                            __typename
                            id
                            alignment
                            colorTheme
                            button {
                                id
                                link
                                text
                            }
                            image {
                                altText
                                image {
                                    url
                                    height
                                    width
                                }
                            }
                            text
                            title
                        }
                        ... on Banner {
                            __typename
                            id
                            bannerText
                            link
                            buttonText
                        }
                        ... on TextSection {
                            __typename
                            id
                            alignTextSection
                            colorThemeTextSection
                            columns
                            heading
                            button {
                                id
                                link
                                text
                                fullWidth
                            }
                            imageTextSection {
                                id
                                altText
                                pillShape
                                image {
                                    height
                                    width
                                    url
                                }
                            }
                            text {
                                html
                            }
                        }
                        ... on GridSection {
                            __typename
                            id
                            gridHeading
                            gridColumns {
                                id
                                columnTitle
                                columnText
                                link
                                linkText
                                columnImage {
                                    id
                                    altText
                                    pillShape
                                    image {
                                        id
                                        height
                                        url
                                        width
                                    }
                                }
                            }
                        }
                        ... on Testimonial {
                            __typename
                            id
                            testimonialTitle: title
                            colorTheme
                            quotes {
                                id
                                text
                                person
                            }
                        }
                        ... on Map {
                            __typename
                            id
                            mapTitle
                            coordinates {
                                latitude
                                longitude
                            }
                        }
                    }
                    footer {
                        contactInfo {
                            html
                        }
                        images {
                            ... on Image {
                                id
                                altText
                                image {
                                    height
                                    width
                                    url
                                }
                            }
                        }
                        logo {
                            altText
                            image {
                                height
                                url
                                width
                            }
                        }
                        nav {
                            id
                            navItems {
                                ... on NavItem {
                                    __typename
                                    id
                                    text
                                    page {
                                        slug
                                    }
                                }
                            }
                        }
                    }
                }
            }
        `, {
            variables: {
                slug,
            },
        })
    return page
}