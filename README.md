<h1>ExF-Router</h1>

Router for SPA, created for ExF-TS

[ExF-TS](https://github.com/aleksandar9999a/exf-ts)

<h2>How to install?</h2>

```javascript
yarn add exf-router
```

<h2>How to use it?</h2>

First you must first register your components as follows.

```javascript
import { ExFModule } from 'exf-ts';
import { Router, RouterLink } from 'exf-router';
import { Container, Navbar } from 'somewhere'

ExFModule({
    components: [
        Container,
        Navbar,
        RouterLink,
        Router
    ],
    bootstraps: [
        Container
    ],
    root: 'root'
})
```

<br />

And after this you can use router anywhere. You must pass routes like this:

```javascript
import ExF, { CustomElement, Component } from 'exf-ts'
import { IRoute } from 'exf-router/lib/interfaces/interfaces';

@CustomElement({
	selector: 'exf-container'
})
export class Container extends Component {
	routes: IRoute[] = [
        { component: 'exf-hero', path: '/' },
        { component: 'exf-notFound', path: '**' }
    ]

	render() {
		return (
			<div className="container">
                <exf-router routes={this.routes} />
			</div>
		)
	}
}
```
<br />

And last step is to use router-link to navigate.
```javascript
import ExF, { CustomElement, Component } from 'exf-ts'

@CustomElement({
	selector: 'exf-navbar'
})
export class Navbar extends Component {
	render() {
		return (
			<div className="navbar">
                <exf-router-link route="/">
                    <p>Hero</p>
                </exf-router-link>
			</div>
		)
	}
}
```