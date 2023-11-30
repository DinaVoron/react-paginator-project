import {useState, useEffect}  from 'react'
import ReactPaginate from 'react-paginate';
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';


function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div>
            <h3>Item #{item}</h3>
          </div>
        ))}
    </>
  );
}

export default function PaginatedItems(props) {
  const [itemOffset, setItemOffset] = useState(0);
  const [searchTitle, setSearchTitle] = useState('');
  const itemsPerPage = 10;
  const items = props.data.filter(
    (elem) => {
      return elem.title.indexOf(searchTitle) !== -1;
    }
  );

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  const handleTitleInput = (event) => {
    setSearchTitle(event.target.value)
  };

  const onclick = (event) => {
    // window.location.assign('/comment/{event.target.id}');
    console.log(event.target.key);
  }

  return (
      <>
      <div className="search">
      <form>
          <label>Введите заголовок для поиска: 
              <input type="text" name="search__input" onChange={handleTitleInput}/>
          </label>
      </form>
      </div>
      <div className="posts">
          {currentItems.map(post => (
                <div className="post" key={post.id}>
                    <Link to={`/comment/${post.id}`}>
                      <div className="post__title">
                          {post.title}
                      </div>
                    </Link>
                    <div className="post__body">
                    {post.body}
                    </div>
                </div>
              )
            )}
      </div>
      <div className="paginator-block">
          <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={4}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
          containerClassName="paginator"
          activeClassName='paginator__item'
          />
      </div>
      </>
  );
}