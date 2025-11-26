import React from 'react';
import Layout from '@theme/Layout';

export default function Contact() {
  return (
    <Layout title="Contact">
      <main className="container margin-vert--lg">
        <h1>Me contacter</h1>
        <p>Vous pouvez m’envoyer un message avec ce formulaire :</p>

        <form
          action="mailto:vspirine@free.fr"
          method="POST"
          encType="text/plain"
          className="margin-top--md"
        >
          <div className="margin-bottom--sm">
            <label>
              Nom<br />
              <input type="text" name="name" required />
            </label>
          </div>

          <div className="margin-bottom--sm">
            <label>
              Email<br />
              <input type="email" name="email" required />
            </label>
          </div>

          <div className="margin-bottom--sm">
            <label>
              Message<br />
              <textarea name="message" rows={5} required />
            </label>
          </div>

          <button type="submit" className="button button--primary">
            Envoyer
          </button>
        </form>
      </main>
    </Layout>
  );
}
