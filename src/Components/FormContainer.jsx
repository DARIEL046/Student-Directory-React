const FormContainer = () => {
    return (
        <>
        <section id="FormContainer">
        <form id="studentForm">
          <div class="input-fields">
            <label for="name">Student Name:</label>
            <input type= "text" name="name" id="name"></input>
          </div>

          <div class="input-fields">
            <label for="program">Program:</label>
            <input type= "text" name="progrram" id="program"></input>
          </div>
         
          <div>
          <button type="submit" >Add Students</button>
          </div>
        </form>
        </section>
        </>
 )
}
export default FormContainer;