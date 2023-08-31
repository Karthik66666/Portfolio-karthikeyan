import React from "react";
import { Link } from "react-router-dom";

export function Canvas() {
  return (
    <>
      <button
        class="btn btn-primary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasScrolling"
        aria-controls="offcanvasScrolling"
      >
        Menu
      </button>

      <div
        class="offcanvas offcanvas-start"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabindex="-1"
        id="offcanvasScrolling"
        aria-labelledby="offcanvasScrollingLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasScrollingLabel">
            Navication on my Portfolio
          </h5>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
         <Link to='/'><button>Home</button></Link><br /><br />
         <Link to='/About'><button>About</button></Link><br /><br />
         <Link to='/certification'><button>Certification</button></Link><br /><br />
         <Link to='/Skill'><button>Skills</button></Link><br /><br />
         <Link to='/Contact'><button>Contact</button></Link>
        </div>
      </div>
    </>
  );
}
