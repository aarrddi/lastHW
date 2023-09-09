import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


const getBooks = async () =>{
    const res = await prisma.book.findMany({
        select:{
            id: true,
            title: true,
            author: true,
            publisher:true,
            year:true
        }
    });
    return res; 
}

const Books = async () =>{
    const Books = await getBooks();
    
    return(
        <div>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Books Title</th>
                        <th>Author</th>
                        <th>Publisher</th>
                        <th className="text-center">Year</th>
                    </tr>
                </thead>
                <tbody>
                    {Books.map((book,index)=>(
                    <tr key={book.id}>
                         <td>{index + 1}</td>
                         <td>{book.title}</td>
                         <td>{book.author}</td>
                         <td>{book.publisher}</td>
                         <td>{book.year}</td>
                    </tr>
                    ))}
                   
                </tbody>
            </table>
        </div>
    )
}

export default Books;