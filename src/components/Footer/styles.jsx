import styled from 'styled-components'

export const Foo = styled.footer`
	color: white;
	background: #4f4f4f;
	padding: 16px 0;
	text-align: center;
	font-size: 16px;
	font-family: Proxima Nova;
`

export const Link = styled.a`
	color: white;
	text-decoration: none;

	&:hover {
		text-decoration: underline;
		cursor: pointer;
	}
`
