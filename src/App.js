import React, { Fragment } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
	return (
		<Fragment>
			<Navbar />
			<iframe
				title='dashboard'
				src='https://app.powerbi.com/view?r=eyJrIjoiNjgwNTQ1NmItMmY2MC00Y2YxLTkyY2UtYTJmODk2MjY2MzkxIiwidCI6IjU4NjNjMjQ5LWU3MWQtNDgyMy05MzE2LWNjOGFjNjQ4Y2FhMSIsImMiOjEwfQ%3D%3D'
				frameborder='0'
				allowFullScreen='true'
			/>
			<Footer />
		</Fragment>
	)
}

export default App
