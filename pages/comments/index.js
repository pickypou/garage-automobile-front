import { Card } from "react-bootstrap";
import Footer from "../footer";
import Link from "next/link";
import CommentRating from "./CommentRating";

export default function Comments({ comments }) {
  return (
    <>
      <main>
        <h1 className="text-center mt-5 mb-5">Liste des commantaires</h1>
        

        <div className="row  justify-content-evenly flex-wrap">
        {comments.map((comment) => {
          return (
            <div className="col-md-4 mb-4" key={comment.id}>
           
              <Card style={{ width: "18rem" }}>
              <CommentRating />
                <Card.Body>
                  <Card.Title className="title">{comment.title}</Card.Title>
                  <Card.Text>{comment.description} </Card.Text>
                  <Link href={"/" } className="link text-center mt-3 mb-2 btn btn-outline-secondary mx-auto">
                   Accueil
                  </Link>
                </Card.Body>
             
              </Card>
            </div>
               
          );
        })}
      </div>
      
        <Footer/>
      </main>
    </>
  );
}
export const getStaticProps = async () => {
  const commentsUrl = "http://127.0.0.1:8000/api/comments";
  const commentsResponse = await fetch(commentsUrl, {
    headers: {
      Accept: "application/json",
    },
  });

  const comments = await commentsResponse.json();

  return {
    props: {
      comments,
    },
  };
};
