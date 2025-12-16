import { FilterView } from './FilterView'
import { useFilterViewModel } from './useFilter.viewModel'



export const Filter = () => {

    const props = useFilterViewModel()
  return (
    <FilterView {...props}/>
  )
}
