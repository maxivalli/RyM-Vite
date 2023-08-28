import { connect } from 'react-redux'
import Cards from '../../components/Cards/Cards'

function Favorites({favorites}) {
  return (
    <>
      <Cards characters={favorites}/>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    favorites: state.myFavorites
  }
}

export default connect(mapStateToProps, null)(Favorites);