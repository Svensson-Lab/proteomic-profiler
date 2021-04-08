import React from 'react';
import {useDispatch} from 'react-redux';
import {selectLocations} from '../../store/actions';
import {Multiselect} from 'multiselect-react-dropdown';
import subcell from './subcell.json';
import './SubcellularLocations.scss';

const SubcellularLocations = () => {
  const dispatch = useDispatch();
  const subcellular_locations = subcell.locations;

  const onChange = (selected_list, selected_item) => dispatch(selectLocations(selected_list))

  return (
    <div className='choose-subcell-locations'>
      <h4>Select Which Subcellular Locations to Filter</h4>
      <p>For example, if you select "Cell Membrane" and "Golgi Apparatus", the program will highlight the proteins that are localized in the cell membrane or the golgi apparatus, and leave all of the other proteins in your list blank.</p>
      <Multiselect 
        options={subcellular_locations}
        isObject={false}
        onSelect={onChange}
        onRemove={onChange}
        placeholder='Select Locations...'
      />
    </div>
  )
}

export default SubcellularLocations;