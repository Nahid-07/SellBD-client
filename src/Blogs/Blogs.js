import React from "react";

const Blogs = () => {
  return (
    <div className="container mx-auto ">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl">
            {" "}
            What are the different ways to manage a state in a React
            application?
          </h2>
          <p>
            There are four main types of state you need to properly manage in
            your React apps:
          </p>
          <ul className="list-disc ml-4 text-lg">
            <li>Local state</li>
            <li>Global state</li>
            <li>Server state</li>
            <li>URL state</li>
          </ul>
          <div>
            <h3 className="text-lg bg-slate-300 p-2">Local state</h3>
            <p>Local state is data we manage in one or another component.</p>
            <p>
              Local state is most often managed in React using the useState
              hook.
            </p>
            <p>
              For example, local state would be needed to show or hide a modal
              component or to track values for a form component, such as form
              submission, when the form is disabled and the values of a form’s
              inputs
            </p>
          </div>
          <div>
            <h3 className="text-lg bg-slate-300 p-2">Global state</h3>
            <p>Global state is data we manage across multiple components.</p>
            <p>
              Global state is necessary when we want to get and update data
              anywhere in our app, or in multiple components at least.
            </p>
            <p>
              A common example of global state is authenticated user state. If a
              user is logged into our app, it is necessary to get and change
              their data throughout our application.
            </p>
          </div>
          <div>
            <h3 className="text-lg bg-slate-300 p-2">Server state</h3>
            <p>
              {" "}
              Data that comes from an external server that must be integrated
              with our UI state.
            </p>
            <p>
              {" "}
              Data that comes from an external server that must be integrated
              with our UI state.
            </p>
            <p>
              There are several pieces of state that must be managed every time
              you fetch or update data from an external server, including
              loading and error state. Fortunately there are tools such as SWR
              and React Query that make managing server state much easier
            </p>
          </div>
          <div>
            <h3 className="text-lg bg-slate-300 p-2">URL state</h3>
            <p>
              {" "}
              Data that exists on our URLs, including the pathname and query
              parameters.
            </p>
            <p>
              {" "}
              URL state is often missing as a category of state, but it is an
              important one. In many cases, a lot of major parts of our
              application rely upon accessing URL state. Try to imagine building
              a blog without being able to fetch a post based off of its slug or
              id that is located in the URL!
            </p>
            <p>
              There are undoubtedly more pieces of state that we could identify,
              but these are the major categories worth focusing on for most
              applications you build.
            </p>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 shadow-xl my-5">
        <div className="card-body">
          <h2 className="text-center text-2xl">
            How does prototypical inheritance work?
          </h2>
          <p>
            In programming, we often want to take something and extend it.For
            instance, we have a user object with its properties and methods, and
            want to make admin and guest as slightly modified variants of it.
            We’d like to reuse what we have in user, not copy/reimplement its
            methods, just build a new object on top of it.In JavaScript, objects
            have a special hidden property [[Prototype]] (as named in the
            specification), that is either null or references another object.
            That object is called “a prototype”:When we read a property from
            object, and it’s missing, JavaScript automatically takes it from the
            prototype. In programming, this is called “prototypal inheritance”.
            The Prototypal Inheritance is a feature in javascript used to add
            methods and properties in objects. It is a method by which an object
            can inherit the properties and methods of another object.
            Traditionally, in order to get and set the [[Prototype]] of an
            object, we use Object. getPrototypeOf and Object
          </p>
        </div>
      </div>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl">What is Uinit test ?</h2>
          <p>
            Unit Testing is a type of software testing where individual units or
            components of a software are tested. The purpose is to validate that
            each unit of the software code performs as expected. Unit Testing is
            done during the development (coding phase) of an application by the
            developers. Unit Tests isolate a section of code and verify its
            correctness. A unit may be an individual function, method,
            procedure, module, or object.
          </p>
          <h2 className="text-center text-2xl bg-slate-300">
            Why should we write unit tests?
          </h2>
          <p>
            Unit Testing is important because software developers sometimes try
            saving time doing minimal unit testing and this is myth because
            inappropriate unit testing leads to high cost Defect fixing during
            System Testing, Integration Testing and even Beta Testing after
            application is built. If proper unit testing is done in early
            development, then it saves time and money in the end.
          </p>
        </div>
      </div>
      <div className="card bg-base-100 shadow-xl my-5">
        <div className="card-body">
          <h2 className="text-center text-2xl">React vs. Angular vs. Vue?</h2>
          <p>
            There are three frameworks for building web applications that every
            frontend developer has heard about: React, Vue.js, and Angular.React
            is a UI library, Angular is a fully-fledged front-end framework,
            while Vue.js is a progressive framework.They can be used almost
            interchangeably to build front-end applications, but they’re not 100
            percent the same, so it makes sense to compare them and understand
            their differences.Each framework is component-based and allows the
            rapid creation of UI features.
          </p>
          <div>
            <h3 className="text-lg bg-slate-300 p-2">React</h3>
            <p>
              React can be used as a UI library to render elements, without
              enforcing a specific project structure, and that’s why it’s not
              strictly a framework.
            </p>
            <p>
              React Elements are the smallest building blocks of React apps.
              They are more powerful than DOM elements because the React DOM
              makes sure to update them efficiently whenever something changes.
            </p>
            <p>
              Components are larger building blocks that define independent and
              reusable pieces to be used throughout the application. They accept
              inputs called props and produce elements that are then displayed
              to the user.
            </p>
            <p>
              React is based on JavaScript, but it’s mostly combined with JSX
              (JavaScript XML), a syntax extension that allows you to create
              elements that contain HTML and JavaScript at the same time.
            </p>
          </div>
          <div>
            <h3 className="text-lg bg-slate-300 p-2">Angular</h3>
            <p>
              In this article, I’m discussing Angular 2, and not the first
              version of the framework which is now known as AngularJS.
            </p>
            <p>
              AngularJS, the original framework, is an MVC Model-View-Controller
              framework. But in Angular 2, there’s no strict association with
              MV*-patterns as it is also component-based.Projects in Angular are
              structured into Modules, Components, and Services. Each Angular
              application has at least one root component and one root module.
            </p>
            <p>
              Each component in Angular contains a Template, a Class that
              defines the application logic, and MetaData (Decorators). The
              metadata for a component tells Angular where to find the building
              blocks that it needs to create and present its view.
            </p>
            <p>
              Services in Angular are used by Components to delegate
              business-logic tasks such as fetching data or validating input.
              They are a distinct part of Angular applications. While Angular
              doesn’t enforce their use, it’s highly suggested to structure apps
              as a set of distinct services that can be reused.
            </p>
          </div>
          <div>
            <h3 className="text-lg bg-slate-300 p-2">Vue</h3>
            <p>
              The Vue.js core library focuses on the View layer only. It’s
              called a progressive framework because you can extend its
              functionality with official and third-party packages, such as Vue
              Router or Vuex, to turn it into an actual framework.
            </p>
            <p>
              Although Vue is not strictly associated with the MVVM
              (Model-View-ViewModel) pattern, its design was partly inspired by
              it. With Vue, you’ll be working mostly on the ViewModel layer, to
              make sure that the application data is processed in a way that
              allows the framework to render an up-to-date View.
            </p>
            <p>
              Vue’s templating syntax lets you create View components, and it
              combines familiar HTML with special directives and features. This
              templating syntax is preferred, even though raw JavaScript and JSX
              are also supported.
            </p>
            <p>
              Components in Vue are small, self-contained, and can be reused
              throughout the application. Single File Components (SFCs) with the
              .vue extension contain HTML, CSS, and JavaScript so that all
              relevant code resides in one file.
            </p>
            <p>
              SFCs are the recommended way to organize code in Vue.js projects,
              especially larger ones. Tools such as Webpack or Browserify are
              required to transpile SFCs into working JavaScript code.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
