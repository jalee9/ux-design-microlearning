# Faculty Development Workshop Registration — Redesigned Experience

This folder contains the **redesigned version** of the fictional Faculty Development workshop-registration website.

It uses essentially the same scenario, content, and functionality as the original version.

The primary difference is how the interface supports the user's goal throughout the experience.

> Good UX keeps users focused on their goal rather than requiring them to figure out the interface.

---

## Before Exploring the Code

If possible, experience the **Original Experience** first.

Then complete the same task using this version.

### Your Scenario

Your boss has reminded you that you still need to register for an upcoming faculty professional development workshop.

Registration closes today.

You are on your way to class and have only a minute or two to spare.

You already know about the workshop and have decided to attend.

### Your Goal

**Register for the workshop.**

As you move through the redesigned experience, consider:

- Where does your attention go first?
- Is the primary action clear?
- Do you know what will happen when you select it?
- Do you know when registration has been successfully completed?
- Does the interface anticipate what you may need next?

---

## The UX Lens

This redesign uses three questions to guide interface decisions:

### 1. What is the user trying to accomplish?

The user wants to register for a specific workshop.

### 2. Is the design helping the user accomplish it?

The interface should make the registration path clear without requiring the user to interpret vague actions.

### 3. What will the user need next?

After registering, the user's needs change.

The user may now need to know:

- whether registration was successful,
- when the workshop occurs,
- how the workshop will be delivered,
- where to find the meeting information,
- and how to make a change later.

UX design considers the user's experience across the entire journey rather than focusing on a single screen.

---

## What Changed?

The redesign does not completely rebuild the website.

Instead, selected interface decisions were changed because they directly affect the user's experience.

| Original Experience | Redesigned Experience | UX Reason |
| --- | --- | --- |
| `Continue` | `Register for This Workshop` | Clearly communicates the action and expected result |
| Several similarly emphasized actions | Clear primary and secondary actions | Creates stronger visual hierarchy |
| `Thank You!` | `You're registered!` | Explicitly communicates successful completion |
| `Your request has been received` | Registration clearly confirmed | Removes uncertainty about registration status |
| Workshop information not repeated | Date, time, and delivery method displayed | Provides useful information at the point the user needs it |
| `Continue` after registration | Clear next-step options | Helps the user understand what happens next |
| Registration management not apparent | `Manage Registration` available | Anticipates a possible future user need |

---

## What Did NOT Change?

An important part of UX design is recognizing when something **doesn't need to be redesigned**.

The registration form remains intentionally similar between the two versions.

Why?

Because the form was not the primary problem.

Redesigning something simply because you *can* is not the goal of UX.

Instead of asking:

> **What can I redesign?**

Ask:

> **What problem am I trying to solve for the user?**

That question should guide the design decision.

---

## Project Files

```text
redesigned/
│
├── index.html
├── details.html
├── workshops.html
├── register.html
├── confirmation.html
├── manage.html
│
├── css/
│   └── styles.css
│
├── js/
│   └── app.js
│
└── README.md
```

---

## Learning from the HTML

HTML provides the structure and meaning of the interface.

As you examine the source, look for semantic elements such as:

```html
<header>
<nav>
<main>
<section>
<form>
<footer>
```

Also pay attention to the **content inside the HTML elements**.

For example:

```html
<a href="register.html">
    Register for This Workshop
</a>
```

The code required to create this link is simple.

However, the wording communicates important information to the user:

- what action is available,
- what the action applies to,
- and what the user can expect to happen.

This demonstrates an important relationship between **content design and UX design**.

---

## Learning from the CSS

Open `css/styles.css` and examine how CSS creates visual hierarchy.

Look for the styles associated with the primary registration action.

Consider:

- size
- spacing
- placement
- typography
- contrast
- surrounding whitespace

CSS is not simply decoration.

Visual design helps communicate relationships, importance, and available actions.

Ask yourself:

> **What does this interface want me to notice first?**

Then identify the CSS rules that help create that experience.

---

## Learning from the JavaScript

Open `js/app.js`.

The JavaScript in this project is intentionally simple.

Look for the form-submission event and identify:

```javascript
event.preventDefault();
```

Research or explain what this method does.

Then determine how the demonstration moves the user from the registration form to the confirmation experience without requiring a database or server-side application.

Consider why this approach is appropriate for a static instructional demonstration but would not be sufficient for a real registration system.

---

## Compare the Code

One of the most important activities in this project is comparing the two versions.

Open the corresponding files side by side.

For example:

```text
original/index.html
redesigned/index.html
```

or:

```text
original/confirmation.html
redesigned/confirmation.html
```

Look carefully at what changed.

You may discover that some significant UX improvements require only small changes to the underlying code.

For example:

```html
Continue
```

versus:

```html
Register for This Workshop
```

The technical difference is tiny.

The difference in communication can be significant.

---

## Student Challenge

Choose one additional improvement you would make to the redesigned experience.

Do not begin by changing the code.

First identify:

**The user:**  
Who is using this interface?

**The goal:**  
What is the user trying to accomplish?

**The friction:**  
What is making that task unnecessarily difficult or unclear?

**The change:**  
What would you modify?

**The reason:**  
How would the change improve the user's experience?

Then implement your improvement using HTML, CSS, and/or JavaScript.

Document your decision using this format:

> **The user is trying to...**
>
> **The current design could be improved because...**
>
> **I changed...**
>
> **This improves the experience because...**

---

## Key Takeaway

A technically functional website is not necessarily a user-friendly website.

Web developers need to think about both.

The code determines whether the technology works.

UX design asks another question:

> **Does it work well for the person using it?**

**Good UX starts with the user—not the technology.**

---

## Technical Notes

This project uses:

- HTML5
- CSS3
- vanilla JavaScript

No frameworks, databases, APIs, or server-side technologies are required.

The site can be hosted as a static website using GitHub Pages.

The source code is intentionally approachable for beginning web-development students and includes comments explaining both development concepts and selected UX decisions.
