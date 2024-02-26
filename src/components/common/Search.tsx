import { RiSearchLine } from 'react-icons/ri';
import styles from './Search.module.css';
import { useNavigate } from 'react-router-dom';
import { useRecoilValueLoadable } from 'recoil';
import { Product, productsList } from '../../store/products';
import React, { ChangeEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react';

const Search = () => {
  const navigate = useNavigate();
  const productsLoadable = useRecoilValueLoadable<Product[]>(productsList);
  const products: Product[] = useMemo(() => ('hasValue' === productsLoadable.state ? productsLoadable.contents : []), [productsLoadable.state, productsLoadable.contents]);
  const [search, setSearch] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [filterItems, setFilterItems] = useState(products);
  const $search = useRef<HTMLInputElement>(null);
  const $searchedItem = '.searchedItem';

  const handleSearchChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event?.target.value);
  }, []);

  const goLink = useCallback(
    (id: number) => {
      setSearch('');
      navigate(`/product/${id}`);
    },
    [navigate]
  );

  const goSearchList = useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
    const $target = event.target as HTMLElement;
    const $next = $target.nextElementSibling as HTMLElement;
    if ('ArrowDown' === event.key) {
      event.preventDefault();
      if (null === $next || $next.querySelector($searchedItem)) {
        return;
      }
      ($next.querySelector($searchedItem) as HTMLButtonElement).focus();
    } else if ('Enter' === event.key) {
      event.preventDefault();
      $next && $next.click();
    }
  }, []);

  const changeTarget = useCallback((event: React.KeyboardEvent<HTMLButtonElement>) => {
    const $target = event.target as HTMLLIElement;
    if ('ArrowUp' === event.key) {
      event.preventDefault();
      const $prev = ($target.parentElement as HTMLLIElement).previousElementSibling;
      if (null === $prev) {
        $search?.current?.focus();
        return;
      }
      ($prev.querySelector($searchedItem) as HTMLButtonElement).focus();
    } else if ('ArrowDown' === event.key) {
      event.preventDefault();
      const $next = ($target.parentElement as HTMLElement).nextElementSibling;
      if (!$next) {
        return;
      }
      ($next.querySelector($searchedItem) as HTMLButtonElement).focus();
    }
  }, []);

  const toggleSearch = () => {
    $search?.current?.classList.toggle('.searchInput');
    $search?.current?.blur();
    setSearch('');
    setFilterItems([]);
  };

  useEffect(() => {
    if (products.length <= 0) {
      return;
    }
    setFilterItems(
      products.filter((product) => {
        if ('' === search) {
          return '';
        }
        return product.title.toLowerCase().includes(search.toLowerCase());
      })
    );
  }, [search, products]);

  useEffect(() => {
    if ('hasValue' === productsLoadable.state) {
      setDisabled(false);
    }
  }, [productsLoadable.state]);

  return (
    <div className={styles.search}>
      <input type="text" placeholder="상품을 검색하세요." disabled={disabled} ref={$search} onChange={handleSearchChange} onKeyDown={goSearchList} className={styles.searchInput} />
      <button type="button" onClick={toggleSearch} className={styles.btnSearch}>
        <RiSearchLine className={styles.icon} />
      </button>
      <ul className={styles.dropdown}>
        {filterItems.map((product) => {
          return (
            <li key={product.id}>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  goLink(product.id);
                }}
                onKeyDown={changeTarget}
                className={styles.searchedItem}>
                <span className={styles.title}>{product.title}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Search;
