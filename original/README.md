# Faculty Development Workshop Registration — Original Experience

This folder contains the **original version** of a fictional Faculty Development workshop-registration website.

The website is part of a UX (User Experience) learning activity designed to demonstrate an important idea:

> A website can be technically functional and still create unnecessary friction for the user.

Before reviewing the source code, experience the website as a user.

---

## Your Scenario

Your boss just reminded you that you still have not registered for an upcoming faculty professional development workshop.

Registration closes today.

You are on your way to class and have only a minute or two to spare.

You already know about the workshop and have decided that you want to attend.

### Your Goal

**Register for the workshop.**

As you move through the site, pay attention to your experience.

- Where do you look first?
- Where do you click?
- Do you ever hesitate?
- Do you know what will happen when you select an action?
- Do you know when your task has been successfully completed?
- What information do you need next?

Try not to analyze the design yet.

Simply use the website.

---

## Important: The Website Works

This version is intentionally **not** an example of poorly written code.

The HTML, CSS, navigation, form, and JavaScript are designed to function correctly.

The site also uses appropriate web-development practices such as:

- semantic HTML
- form labels
- organized CSS
- responsive layouts
- keyboard-accessible controls
- clear document structure
- simple JavaScript form handling

The learning activity focuses on the **experience created by selected interface decisions**, not on broken code.

This distinction is important.

A developer can create technically correct code without necessarily creating the best possible experience for the person using it.

---

## Project Files

```text
original/
│
├── index.html
├── details.html
├── workshops.html
├── register.html
├── confirmation.html
│
├── css/
│   └── styles.css
│
├── js/
│   └── app.js
│
└── README.md
```

### HTML Files

The HTML files create the content and structure of the website.

As you explore them, look for semantic elements such as:

```html
<header>
<nav>
<main>
<section>
<form>
<footer>
```

Consider why these elements may be more meaningful than using `<div>` elements for every part of the page.

### CSS

The `css/styles.css` file controls the visual presentation of the website.

Look for examples of:

- typography
- spacing
- layout
- buttons and links
- visual hierarchy
- responsive design
- form styling

Remember that CSS affects more than appearance. Visual design can influence what users notice first and how they interpret an interface.

### JavaScript

The `js/app.js` file provides the small amount of interactivity needed for the demonstration.

This project intentionally uses **vanilla JavaScript** rather than a framework so beginning web-development students can follow the code more easily.

---

## Look Under the Hood

After you have experienced the website, examine the source code.

As you review the files, consider both the **development decisions** and the **user experience** those decisions help create.

### HTML

1. How is the workshop information structured?

2. What semantic HTML elements are used?

3. How are links and buttons labeled?

4. How are `<label>` elements associated with the registration form fields?

5. Can technically correct HTML still communicate something unclearly to a user?

### CSS

1. What elements receive the most visual emphasis?

2. How are actions presented to the user?

3. Does the visual hierarchy make the user's primary task obvious?

4. How does the layout change on smaller screens?

### JavaScript

1. What happens when the registration form is submitted?

2. What does `event.preventDefault()` accomplish?

3. Why can this demonstration work without a database?

4. What functionality comes from JavaScript versus normal HTML navigation?

---

## Think Like a UX Designer

After experiencing the site and reviewing the code, use these questions to evaluate the interface:

### 1. What is the user trying to accomplish?

Identify the user's actual goal rather than simply describing what is displayed on the screen.

### 2. Is the design helping the user accomplish it?

Consider whether the interface clearly communicates what the user should do.

### 3. What will the user need next?

Think beyond the current screen.

Once the user completes an action, what information or next step might they reasonably expect?

---

## Reflection

Consider the following:

> Where did the interface require the user to stop and interpret what the designer intended?

Then identify **one change** you would make.

Explain your recommendation using this structure:

> **The user is trying to...**
>
> **The current design creates friction because...**
>
> **I would change...**
>
> **This would improve the experience because...**

Avoid simply saying that something would "look better."

UX recommendations should connect to a user's **needs, goals, or experience**.

---

## Next Step

After completing the original experience, explore the **Redesigned Experience**.

Compare the two versions before looking closely at the redesigned source code.

Ask yourself:

> **What changed about the experience—and why?**
