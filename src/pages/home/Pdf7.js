import React, { useState } from 'react';
import { Document, Page,pdfjs } from 'react-pdf';


const url =
"https://img1.wsimg.com/blobby/go/c655eab1-2b2b-46eb-97ad-d99ae45e5fc9/downloads/Privacy%20Policy%20.pdf?ver=1644314703869"
export default function Test() {
	
pdfjs.GlobalWorkerOptions.workerSrc =
`//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const [numPages, setNumPages] = useState(null);
const [pageNumber, setPageNumber] = useState(1);

/*To Prevent right click on screen*/
document.addEventListener("contextmenu", (event) => {
	event.preventDefault();
});
	
/*When document gets loaded successfully*/
function onDocumentLoadSuccess({ numPages }) {
	setNumPages(numPages);
	setPageNumber(1);
}

function changePage(offset) {
	setPageNumber(prevPageNumber => prevPageNumber + offset);
}

function previousPage() {
	changePage(-1);
}

function nextPage() {
	changePage(1);
}

return (
	<>
	<div style={{marginLeft:'450px'}} className="main">
	<Document
		file={url}
		onLoadSuccess={onDocumentLoadSuccess}
	>
		<Page pageNumber={pageNumber} />
	</Document>
	<div style={{marginLeft:'260px'}}>
		<div className="pagec">
		Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
		</div>
		<div className="buttonc">
		<button
		type="button"
		disabled={pageNumber <= 1}
		onClick={previousPage}
		className="Pre"
			
		>
		Previous
		</button>
		<button
		type="button"
		disabled={pageNumber >= numPages}
		onClick={nextPage}
		
		>
		Next
		</button>
		</div>
	</div>
	</div>
	</>
);
}
