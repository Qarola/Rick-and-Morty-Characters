import React from 'react'

const PaginationTwo = ({ nextPage, prevPage, goToPage, pages }) => {
  let pageButtons = []
  for (let i = 1; i <= pages; i++) {
    pageButtons.push(<button  key={i} onClick={() => goToPage(i)}>{i}</button>)
  }
  return (
    <div className='pag'> 
      {prevPage && (<button className='pag-link' onClick={prevPage}>Previous</button>)}
      {pageButtons}
      {nextPage && (<button className='pag-link' onClick={nextPage}>Next</button>)}
    </div>
  )
}

export default PaginationTwo;