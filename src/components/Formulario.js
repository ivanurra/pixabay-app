import React from "react";

const Formulario = () => {
  return (
    <form>
      <div className="row">
        <div className="form-group col-md-9">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Find a image"
          />
        </div>
        <div className="form-group col-md-3">
          <input
            type="submit"
            className="btn btn-lg btn-danger btn-block"
            value="GO"
          />
        </div>
      </div>
    </form>
  );
};

export default Formulario;
