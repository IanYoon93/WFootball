import { RiSearchLine } from 'react-icons/ri';
import styles from './Search.module.css';
import { useNavigate } from 'react-router-dom';
import { useRecoilValueLoadable } from 'recoil';
import { Product, productsList } from '../../store/products';
import React, { ChangeEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react';

const Search = () => {
  const navigate = useNavigate();
  const productsLoadable = useRecoilValueLoadable<Product[]>(productsList);
  const products: Product[] = 'hasValue' === productsLoadable.state ? productsLoadable.contents : [];
  const [search, setSearch] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [filterItems, setFilterItems] = useState<Product[]>([]);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const handleSearchChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    // 검색어 상태 업데이트
    setSearch(value);

    // 검색어 변경 시 포커스 초기화
    setFocusedIndex(-1);
  }, []);

  const goLink = useCallback(
    (id: number) => {
      setSearch('');
      navigate(`${id}`);
    },
    [products]
  );

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (filterItems.length === 0) return;

      if (['ArrowDown', 'ArrowUp', 'Enter'].includes(event.key)) {
        event.preventDefault();
      }

      if (event.key === 'ArrowDown') {
        setFocusedIndex((prevIndex) => (prevIndex + 1) % filterItems.length);
      } else if (event.key === 'ArrowUp') {
        setFocusedIndex((prevIndex) => (prevIndex - 1 + filterItems.length) % filterItems.length);
      } else if (event.key === 'Enter' && focusedIndex >= 0) {
        navigate(`${filterItems[focusedIndex].id}`);
        setSearch('');
      }
    },
    [filterItems, focusedIndex, navigate]
  );

  const handleItemKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        setFocusedIndex((index + 1) % filterItems.length);
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        setFocusedIndex((index - 1 + filterItems.length) % filterItems.length);
      } else if (event.key === 'Enter') {
        event.preventDefault();
        navigate(`${filterItems[index].id}`);
        setSearch('');
      }
    },
    [filterItems, navigate]
  );

  // 포커스 이동만 처리
  useEffect(() => {
    if (focusedIndex >= 0 && listRef.current) {
      const item = listRef.current.querySelectorAll('button')[focusedIndex];
      item?.focus();
    }
  }, [focusedIndex]);

  const toggleSearch = () => {
    inputRef?.current?.classList.toggle('.searchedItem');
    inputRef?.current?.blur();
    setSearch('');
    setFilterItems([]);
  };

  useEffect(() => {
    const filteredItems = products.filter((product) => product.title.toLowerCase().includes(search.toLowerCase()));
    setFilterItems(filteredItems);
  }, [search, products]);

  useEffect(() => {
    if ('hasValue' === productsLoadable.state) {
      setDisabled(false);
    }
  }, [productsLoadable.state]);

  // TODO 검색어 입력 후 바로 방향키 움직였을 시 에러 확인 해야함
  // useEffect(() => {
  //   console.log('search state updated:', search);
  // }, [search]);

  // useEffect(() => {
  //   console.log('focusedIndex state updated:', focusedIndex);
  // }, [focusedIndex]);

  // useEffect(() => {
  //   console.log('filterItems updated:', filterItems);
  // }, [filterItems]);

  return (
    <div className={styles.search}>
      <button type="button" onClick={toggleSearch} className={styles.btnSearch}>
        <RiSearchLine className={styles.icon} />
      </button>
      <input type="text" placeholder="상품을 검색하세요." disabled={disabled} ref={inputRef} value={search} onChange={handleSearchChange} onKeyDown={handleKeyDown} className={styles.searchInput} />
      <ul className={styles.dropdown} ref={listRef}>
        {filterItems.map((product, index) => {
          return (
            <li key={product.id}>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  goLink(product.id);
                }}
                onTouchStart={(e) => {
                  e.preventDefault();
                  goLink(product.id);
                }}
                onKeyDown={(e) => handleItemKeyDown(e, index)}
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
