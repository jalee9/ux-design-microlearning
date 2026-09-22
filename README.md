# Designing for the User: A UX Microlearning Demo

This project compares two versions of the same fictional Faculty Development workshop-registration experience. Both versions are technically functional. The purpose is to examine how interface decisions can either create friction or support a user's goal.

## Start with the Experience

Before reading the code, open each version as a user.

### Scenario

Your boss reminds you that you still need to register for a faculty professional development workshop. Registration closes today, and you are on your way to class with only a minute or two to spare.

### Your Goal

**Register for the workshop.**

As you move through the experience, ask yourself:

1. What am I trying to accomplish?
2. Is the design helping me accomplish it?
3. What will I need next?

---

## Explore the Two Experiences

### Original Experience

Start with the original version of the workshop-registration site.

As you use the site, pay attention to moments when you hesitate, have to interpret a label, or are uncertain about what will happen next.

The site is intentionally functional. The HTML, CSS, links, forms, and JavaScript work as expected. The UX issues come from selected interface and content-design decisions rather than broken code.

### Redesigned Experience

Next, complete the same task using the redesigned version.

The user, workshop, content, and overall functionality remain essentially the same. The redesign focuses on better supporting the user's goal throughout the registration experience.

Compare how the two versions feel to use.

---

## The UX Lens

A useful way to evaluate an interface is to consider the experience from the user's perspective:

**What is the user trying to accomplish?**

**Is the design helping the user accomplish it?**

**What will the user need next?**

Good user experience design keeps users focused on their goal rather than requiring them to spend unnecessary time figuring out the interface.

---

## What Changed?

| UX Decision | Original Experience | Redesigned Experience |
| --- | --- | --- |
| Primary action | `Continue` | `Register for This Workshop` |
| Action hierarchy | Several actions receive similar emphasis | Registration is visually primary while additional details remain secondary |
| Registration form | Clear and functional | Intentionally remains very similar |
| Success message | `Thank You! Your request has been received.` | `You're registered!` |
| Registration status | Ambiguous | Explicitly confirmed |
| Workshop details after registration | Not repeated | Date, time, and delivery method are visible |
| Next step | `Continue` | Email expectation and `Add to Calendar` |
| Registration changes | Not apparent | `Manage Registration` is available |

One of the most important ideas demonstrated by this project is that **technically functional does not automatically mean user-friendly**.

The original website works. The links work. The registration form works. The registration can be completed.

The redesign focuses on reducing the amount of interpretation required from the user and communicating more clearly throughout the experience.

---

## Project Structure

```text
ux-design-microlearning/
│
├── original/
│   ├── index.html
│   ├── details.html
│   ├── workshops.html
│   ├── register.html
│   ├── confirmation.html
│   │
│   ├── css/
│   │   └── styles.css
│   │
│   └── js/
│       └── app.js
│
├── redesigned/
│   ├── index.html
│   ├── details.html
│   ├── workshops.html
│   ├── register.html
│   ├── confirmation.html
│   ├── manage.html
│   │
│   ├── css/
│   │   └── styles.css
│   │
│   └── js/
│       └── app.js
│
└── README.md
```

---

## Learning from the Code

This repository is designed not only as a UX demonstration but also as a learning resource for students studying HTML, CSS, JavaScript, and web design.

The source files include comments that explain both the code and selected UX decisions.

### Web Development Comments

Web development comments explain concepts such as:

- semantic HTML
- document structure
- navigation
- forms and labels
- CSS organization
- responsive design
- classes and selectors
- JavaScript events
- form submission behavior
- DOM interaction

These comments are intended to help beginning web development students understand not only what the code does, but why it is structured in a particular way.

### UX Teaching Notes

Some comments are identified as **UX Teaching Notes**.

These comments explain how particular interface decisions may affect the user's experience.

For example, a button labeled:

```html
<a href="register.html">Continue</a>
```

may function perfectly from a technical perspective. However, the word `Continue` requires the user to determine what "continue" means in the context of the page.

A more descriptive action:

```html
<a href="register.html">Register for This Workshop</a>
```

communicates both the action and its expected result.

The underlying link works in both cases.

The difference is the experience created for the user.

---

## Why Isn't the Original Site Poorly Coded?

This distinction is intentional.

The original version does **not** demonstrate poor HTML, broken CSS, inaccessible forms, or malfunctioning JavaScript.

Both versions should demonstrate sound web development practices.

This allows the project to illustrate an important principle:

> Good code and good user experience are related, but they are not the same thing.

A website can be technically correct, responsive, accessible, and functional while still requiring users to perform unnecessary interpretation or effort to accomplish their goals.

UX design asks developers and designers to consider the experience surrounding the technology—not simply whether the technology works.

---

## Why Is the Registration Form Similar in Both Versions?

Not every part of an interface needs to change during a redesign.

The registration form is intentionally similar in the original and redesigned experiences because the form itself is not the primary UX problem being explored.

Changing an interface simply because a redesign is taking place can introduce unnecessary complexity.

Instead, UX decisions should be connected to a user need, problem, or goal.

This is another useful principle when reviewing an existing website:

**Do not begin by asking, "What can I redesign?"**

Begin by asking:

**"What problem am I trying to solve for the user?"**

---

## Student Exploration Activity

Before reviewing the source code, experience both versions of the website.

Then explore the HTML, CSS, and JavaScript files and consider the following questions.

### Experience

1. Where did you hesitate while using the original version?

2. Were there any links or buttons whose purpose you had to interpret?

3. How did the redesigned experience change the way you approached the same task?

4. Did the redesigned version change the underlying task, or did it change how clearly the interface supported the task?

### HTML

5. Find three semantic HTML elements used in the project. What purpose does each element serve?

6. Locate the registration form. How are `<label>` elements connected to their corresponding form controls?

7. Compare the primary registration links in the original and redesigned versions. Does changing the link text require significantly different HTML?

8. Identify an example where the wording inside an HTML element affects UX even though the underlying code remains functional.

### CSS

9. Compare the visual hierarchy of the actions on the original and redesigned workshop pages.

10. Which CSS properties help make the primary registration action more visually prominent?

11. Find an example of spacing being used to group related information.

12. Examine the responsive styles. What happens to the layout when the available screen width becomes smaller?

### JavaScript

13. Review `app.js`. What happens when the registration form is submitted?

14. What does `event.preventDefault()` do in this demonstration?

15. Why can this project simulate registration without using a database or server-side application?

16. Which parts of the experience are controlled by JavaScript, and which are simply navigation between HTML pages?

### UX

17. Compare the confirmation pages. What questions does the original confirmation leave unanswered?

18. How does the redesigned confirmation anticipate what the user may need next?

19. Why might `You're registered!` provide a better user experience than `Your request has been received` in this scenario?

20. Recommend one additional UX improvement to either version. Explain your recommendation from the **user's perspective**, rather than simply stating a personal design preference.

---

## Try It Yourself

Choose one page from the original experience and create your own redesign.

Before changing the code, identify:

- who the user is,
- what the user is trying to accomplish,
- what may be creating unnecessary friction,
- and what you want your redesign to improve.

Then modify the HTML and/or CSS.

When you finish, explain your design decision using this format:

> **The user is trying to...**
>
> **The current design makes this difficult because...**
>
> **I changed...**
>
> **This improves the experience because...**

Remember: UX decisions should be supported by the user's needs and goals, not simply by what the designer personally prefers.

---

## Key Takeaway

When developing a website, it is easy to focus primarily on whether the code works.

UX design adds another question:

**Does this work well for the person using it?**

Good UX starts with the user—not the technology.

---

## Technical Notes

This project uses:

- HTML5
- CSS3
- vanilla JavaScript

No frameworks, databases, external APIs, or server-side technologies are required.

The project is intentionally lightweight so beginning web development students can inspect and understand the source code.

Both versions can be hosted as static websites using GitHub Pages.

---

## Purpose of This Project

This project was originally developed as a microlearning demonstration of user experience design and as an instructional resource for web development students.

It demonstrates how the same basic content and functionality can create different user experiences depending on the decisions made during the design process.

Students are encouraged to experience the interfaces first, inspect the code second, and then consider how development and design decisions work together to shape the experience of the person using the technology.
