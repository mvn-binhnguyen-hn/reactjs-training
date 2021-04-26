# ReactJS training

## Outline
1. React
- Typescript; ReactJS (Main concept, Hooks)
- Style in ReactJS, SCSS.
- Routing
2. Redux
- Redux (Thunk, Saga, Rematch, Redux Toolkit)
- Redux form, Formik (Form, Validation)
3. Others
- API request (axios, interceptors)
- Testing

## Init project

`create-react-app <project-name> --template typescript`

## Config baseUrl

-   Why?
-   How?
    -   Add `"baseUrl": "src";` into `tsconfig.json`
    -   If error occurs: `yarn add eslint-import-resolver-typescript -dev`

## Component; State; Props

-   Create a component: Class component, functional component
-   Handle component state: `setState` / `useState`
-   Props
-   Lift state up

## Render a list

```
{
    arr.map((item, index) => (
        <div key={index}>{item}</div>
    ))
}
```

## Form input

-   value
-   onChange: `e.target.value`

## Styles in React

-   Support SCSS/SASS files: `yarn add node-sass`
-   Inline styles
-   CSS Stylesheet file
-   CSS module
-   Styled components: `yarn add styled-components`

## Routing

-   Create screen components
-   `yarn add react-router-dom @types/react-router-dom`
-   App.tsx:

```
<BrowserRouter>
    <Switch>
        <Route path="/profile" component={ProfileScreen}></Route>
        <Route path="/" component={HomeScreen}></Route>
    </Switch>
</BrowserRouter>
```

-   AppHeader component
-   AppLayout component

## Redux, Persist store

-   `yarn add redux react-redux @types/react-redux`
-   rootReducers: `combineReducers`; `export type RootState = ReturnType<typeof rootReducer>;`
-   store: `createStore`; `const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;`
-   Demo `count` reducer
-   persist store: `yarn add redux-persist`
-   Redux thunk

## Redux form

-   `yarn add redux-form @types/redux-form`
-   add form reducer
```
const rootReducer = combineReducers({
    //Reducer list here
    count: countReducers,
    form: formReducer,
});
```

-   Create a form: `const ContactForm: FC<InjectedFormProps> = ({ handleSubmit }) => {}`
-   Validation:
    -   Synchronous validation; Field level validation
    -   Field component

```
const FormField: FC<WrappedFieldProps & Props> = ({
    input,
    label,
    meta: { touched, error, warning },
}) => {
    return (
        <div>
            <label htmlFor={input.name}>{label}</label>
            <input {...input} />
            {touched &&
                ((error && <span className={styles.error}>{error}</span>) ||
                    (warning && (
                        <span className={styles.warning}>{warning}</span>
                    )))}
        </div>
    );
};
```

## API request

-   `yarn add axios`
-   apiHelper: `axios.create; interceptors.request; interceptors.response`
