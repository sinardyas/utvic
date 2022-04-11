import React from 'react';
import Link from '@mui/material/Link'
import Breadcrumbs from '@mui/material/Breadcrumbs'

function BreadcrumbsSection({ items }) {
    return (
      <section className="space-from-header py-[1rem] bg-slate-200">
        <div className={'container'}>
          <div role="presentation" className="pt-3">
            <Breadcrumbs aria-label="breadcrumb">
              {
                items.map((item, index) => {
                  const isLastItem = (index + 1) === items.length
                  if(isLastItem) {
                    return (
                      <Link
                        underline="hover"
                        color="text.primary"
                        className="font-bold"
                        href={item.href}
                        key={index}
                      >
                        {item.title}
                      </Link>
                    )
                  }

                  return (
                    <Link
                      underline="hover"
                      color="inherit"
                      href={item.href}
                      className="font-bold"
                      key={index}
                    >
                      {item.title}
                    </Link>
                  )
                })
              }
            </Breadcrumbs>
          </div>
        </div>
      </section>
    );
}

export default BreadcrumbsSection;
