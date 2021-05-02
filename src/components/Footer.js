import React from 'react';

// Props are passed through our functional component.
function Footer() {
  
  return (

    <article id="my-contact-info" class="my-contact-info flex-container">  
                <h2>Contact Me</h2>
                <div>
                    <ul class="flex-container">
                        <li class="list-item-one">
                            <phone class="contact-item">555.555.5555</phone>
                        </li>
                        <li class="list-item-two">
                            <email class="contact-item">rolanduwxcc@gmail.com</email>
                        </li>
                        <li>
                            <a href="https://github.com/rolanduwxcc" class="contact-item">GitHub</a>
                        </li>
                        <li>
                            <a href="https://twitter.com/LEGO_Group" class="contact-item">Twitter</a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/linkedinrowland/" class="contact-item">LinkedIn</a>
                        </li>
                    </ul>
                </div>
            </article>
  );
}

export default Footer;
