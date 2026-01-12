import NotfoundImage from "../assets/Homepagee/404page.jpg";

function NotFoundPage() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center mt-20">
      <img
        className="max-w-150 w-full h-auto"
        src={NotfoundImage}
        alt="404 - Page Not Found"
      />
    </div>
  );
}

export default NotFoundPage;

// function NotFoundPage() {
//   return (
//     <section className="min-h-screen mt-20 flex flex-col justify-center items-center bg-red-700">
//       <h1 className="text-5xl font-bold text-red-600">404 PAGE</h1>
//       <p className="mt-4">If you see this, routing is working</p>
//     </section>
//   );
// }

// export default NotFoundPage;
