import { useState } from "react";
import type { Blog } from "./type";
import { BlogProvider } from "./shared/Blogcontext";
import Navigation from "./Components/Navigation";
import { IoMdAddCircle } from "react-icons/io";
import ArticleList from "./Components/ArticleList";
import Modal from "./Components/Modal";
import BlogForm from "./Components/BlogForm";
import PeopleToFollow from "./Components/Peopletofollow";
import TrendsList from "./Components/TrendsList";
import TopicList from "./Components/TopicList";

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);

  const openModalForNewBlog = () => {
    setEditingBlog(null);
    setModalOpen(true);
  };

  const openModalForEdit = (blog: Blog) => {
    setEditingBlog(blog);
    setModalOpen(true);
  };

  return (
    <div>
      <BlogProvider>
        <Navigation />

        <div className="flex justify-center">
          <div className="mx-auto p-6">
            <div>
              <button
                onClick={openModalForNewBlog}
                className="ml-[7rem] bg-black flex justify-center items-center text-white px-4 py-2 rounded mb-4"
              >
                Add New Blog <IoMdAddCircle className="ml-[.5rem]" />
              </button>

              <ArticleList onEdit={openModalForEdit} />
              {isModalOpen && (
                <Modal onClose={() => setModalOpen(false)}>
                  <BlogForm
                    existingBlog={editingBlog ?? undefined}
                    onClose={() => setModalOpen(false)}
                  />
                </Modal>
              )}
            </div>
          </div>

          <div className="w-[30%]">
            <PeopleToFollow />
            <TrendsList />
            <TopicList />
          </div>
        </div>
      </BlogProvider>
    </div>
  );
};

export default App;
