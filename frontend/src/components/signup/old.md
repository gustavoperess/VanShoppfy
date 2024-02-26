 <!-- <div className="container my-5"> 
     <h1 className="text-center mb-4">Welcome to vanShoppFY</h1>
     <div className="d-grid gap-2">
      {formErrors.submission && <div className="alert alert-danger">{formErrors.submission}</div>}
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input
          id="email"
          type="email"
          placeholder="Email Address"
          className="form-control"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          id="password"
          type="password"
          placeholder="Password"
          className="form-control"
          value={password}
          onChange={handlePasswordChange}
        />
        <button
          role="submit-button"
          id="submit"
          type="submit"
          className="btn btn-primary me-2"
        >
          Sign Up
        </button>
        <Link to="/login" className="btn btn-primary me-2">Log In</Link>      
      </form>
      </div>
    </div> -->