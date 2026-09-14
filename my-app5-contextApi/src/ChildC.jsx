import { data1, data2 } from './App.jsx';

function ChildC() {
    return (
        <>
            <data1.Consumer>
                {(name) => (
                    <data2.Consumer>
                        {(age) => (
                            <h1>
                                My name is {name} and age is {age}
                            </h1>
                        )}
                    </data2.Consumer>
                )}
            </data1.Consumer>
        </>
    );
}

export default ChildC;