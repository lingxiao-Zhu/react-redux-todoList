/**
 * Created by larry on 2017/1/5.
 */
import React from 'react';
import FilterLink from '../containers/FilterLink'

const Footer = () => {
  return(
    <p>
      show:
      {' '}
      <FilterLink filter='SHOW_ALL'>
        ALL
      </FilterLink>
      {','}
      <FilterLink filter='SHOW_ACTIVE'>
        ACTIVE
      </FilterLink>
      {','}
      <FilterLink filter='SHOW_COMPLETED'>
        COMPLETED
      </FilterLink>
    </p>
  )
}

export default Footer
