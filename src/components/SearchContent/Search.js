// Module.
import { useRef } from 'react'
// Util.
import { getTitle } from '../../utils/apiQuery'
// Context.
import { useResultContext } from '../../context/ResultContext'

const Search = () => {
  const inputRef = useRef(null);
  const { setSearchResult } = useResultContext();

  const searchTitle = async (text) => {
    const { data } = await getTitle({ t: text })
    if (data) {
      setSearchResult(data)
    }
  }

  const onSubmit = (ev) => {
    ev.preventDefault();
    searchTitle(inputRef.current?.value || '')
  }

  return (
    <form onSubmit={(ev) => onSubmit(ev)}>
      <fieldset>
        <label>Search a title</label>
        <input ref={inputRef} type="text" name="title" placeholder="Title" />
      </fieldset>
    </form>
  )
}

export default Search;
