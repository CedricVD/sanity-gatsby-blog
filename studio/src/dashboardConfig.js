export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e466cf542faba828292f866',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-cgbbfciz',
                  apiId: '152b5916-83b0-4eef-a3e9-8c2a030dcdf0'
                },
                {
                  buildHookId: '5e466cf617a43b80f5077ef3',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-9vymm44z',
                  apiId: '42676e8f-0bd3-4b2a-8e8f-3df2e2a9af38'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/CedricVD/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-9vymm44z.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
