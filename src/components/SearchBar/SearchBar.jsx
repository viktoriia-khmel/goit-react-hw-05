

import { Field, Form, Formik } from "formik";


const SearchBar = ({handleChangeQuery}) => {
    
   
    

    const initialValues = {
        query: '',
    };
    const handleSubmit = (values) => {
        console.log(values);
        handleChangeQuery(values.query);
       
    }

  return (
    <div>
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
              <Form>
                  <Field name='query' >
                      
                  </Field>
                  <button type="submit">Search</button>
              </Form>
      </Formik>
    </div>
  )
}

export default SearchBar
