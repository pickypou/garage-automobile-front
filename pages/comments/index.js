import { Card } from "react-bootstrap";
import Footer from "../footer";
import Link from "next/link";
import CommentRating from "./CommentRating";

export default function Comments({ comments }) {
  return (
    <>
      <main>
        <h1 className="text-center mt-5 mb-5">Liste des commentaires</h1>
        {comments.length > 0 ? (
          <div className="row d-flex justify-content-evenly">
            {comments.map((comment) => (
              <div className="col-md-4 mb-4" key={comment.id}>
                <Card style={{ width: "18rem" }}>
                  <CommentRating />
                  <Card.Body>
                    <Card.Title className="title">{comment.title}</Card.Title>
                    <Card.Text>{comment.description}</Card.Text>
                    <Link
                      href={"/"}
                      className="link text-center mt-3 mb-2 btn btn-outline-secondary mx-auto"
                    >
                      Accueil
                    </Link>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        ) : (
          <div className="d-flex justify-content-center">
            <Link
              href={"/"}
              className="link text-center mt-3 mb-5 btn btn-outline-secondary col-md-4"
            >
              Accueil
            </Link>
          </div>
        )}
        <Footer />
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const commentsUrl = "http://127.0.0.1:8000/api/comments";
  try {
    const commentsResponse = await fetch(commentsUrl, {
      headers: {
        Accept: "application/json",
      },
    });
    const commentsData = await commentsResponse.json();
    return {
      props: {
        comments: commentsData,
      },
    };
  } catch (error) {
    console.error("Error fetching comments:", error);
    return {
      props: {
        comments: [], // ou un message d'erreur pour afficher dans votre composant React.
      },
    };
  }
};
