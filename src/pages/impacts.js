import { Link } from 'react-router-dom'

import FactorsCard from '../components/FactorsCard'
import ProfileDropdown from '../components/ProfileDropdown'
import SmallCard from '../components/SmallCard'

import AnticlockwiseLine from '../images/anticlockwise-line.svg'
import HandHeart from '../images/hand-heart.svg'
import LayoutLine from '../images/perimeter.svg'
import MenuLineImg from '../images/menulines.svg'
import SearchIcon from '../images/search_icon.svg'

const Impacts = () => {
	return (
		<div className="container my-4">
			<div className="row perimeter_header" style={{ justifyContent: 'space-between' }}>
				<div className="col-md-7 col-12 perimeter_search">
					<img src={MenuLineImg} alt="menuImg" />
					&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
					<img src={SearchIcon} alt="SearchIcon" />
					<input className="search_input" placeholder="Bienvenue Alexandre, comment allez-vous aujourd’hui ? 😃" />
				</div>

				<div className="col-md-2 col-12">
					<ProfileDropdown />
				</div>
			</div>

			{/*? Synthèse impact ? */}
			<div className="mt-5 row " style={{ alignItems: 'center' }}>
				<div className="col">
					<h1>Liste des impacts</h1>
				</div>

				<div className="col ">
					<Link to="/impacts/add-impact">
						<button className="custom_btn" style={{ float: 'right', backgroundColor: '#63DDCF' }}>
							Ajouter un impact
						</button>
					</Link>
				</div>
			</div>

			<div className="row mt-5">
				<div className="col">
					<h1>Synthèse impact</h1>
				</div>
			</div>

			<div className="mt-1 row">
				<div className="py-0 col-lg-6 col-xl-4 py-lg-3">
					<SmallCard text="Impact Total :" icon={HandHeart} value="40 gCO2" />
				</div>

				<div className="py-0 col-lg-6 col-xl-4 py-lg-3">
					<SmallCard text="Incertitude :" icon={LayoutLine} value="25%" />
				</div>

				<div className="py-0 col-lg-6 col-xl-4 py-lg-3">
					<SmallCard text="Nombre facteurs :" icon={AnticlockwiseLine} value="2" />
				</div>
			</div>

			{/* List of Impacts */}
			<div className="row mt-5">
				<div className="col-5">
					<h1 style={{ display: 'flex' }}>
						Liste des facteurs <div className="total_reports">2</div>
					</h1>
				</div>
				<div className="col-7" style={{ display: 'flex', justifyContent: 'space-around' }}>
					<button className="custom_btn" style={{ color: 'black', backgroundColor: '#FFFFFF' }}>
						Status <span className="arrowDownSm"></span>
					</button>

					<button className="custom_btn" style={{ color: 'black', backgroundColor: '#FFFFFF' }}>
						Scope <span className="arrowDownSm"></span>
					</button>

					<button className="custom_btn" style={{ color: 'black', backgroundColor: '#FFFFFF' }}>
						Périmètre <span className="arrowDownSm"></span>
					</button>

					<button className="custom_btn" style={{ color: 'black', backgroundColor: '#FFFFFF' }}>
						Type <span className="arrowDownSm"></span>
					</button>

					<button className="custom_btn" style={{ color: 'black', backgroundColor: '#FFFFFF' }}>
						Imputation <span className="arrowDownSm"></span>
					</button>
				</div>
			</div>

			{/* Impact List Card */}
			<div className="row mt-5 perimeter_list_heading">
				<div className="col-lg-3 px-3">Type de facteur</div>
				<div className="col-lg-3">Impact</div>
				<div className="col-lg-2">Struct</div>
				<div className="col-lg-4">Emissions</div>
			</div>

			{/* Factors Cards Row */}
			<div className="row">
				<FactorsCard typeOfFactor="Lorem Ipsum" impact="1 second view front salto HD" structure="Validé" emissions="2.4800" />

				<FactorsCard typeOfFactor="Lorem Ipsum" impact="1 second view streaming front salto SD" structure="En attente" emissions="2.4800" />

				<FactorsCard typeOfFactor="Lorem Ipsum" impact="1 requête plateforme" structure="En attente" emissions="2.4800" />
			</div>
		</div>
	)
}

export default Impacts
