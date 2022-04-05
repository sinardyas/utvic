import React from 'react';
import Link from '@mui/material/Link'
import Breadcrumbs from '@mui/material/Breadcrumbs'

function BreadcrumbsSection() {
    return (
      <section className="space-from-header py-[1rem] bg-slate-200">
        <div className={'container'}>
          <div role="presentation" className="pt-3">
            <Breadcrumbs aria-label="breadcrumb">
              <Link
                underline="hover"
                color="inherit"
                href="/"
                className="font-bold"
              >
                Home
              </Link>
              <Link
                underline="hover"
                color="text.primary"
                className="font-bold"
              >
                Submit Inovasi
              </Link>
            </Breadcrumbs>
          </div>
        </div>
      </section>
    );
}

export default BreadcrumbsSection;
