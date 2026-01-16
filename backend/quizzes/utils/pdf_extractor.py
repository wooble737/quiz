import io
from typing import Optional
try:
    from PyPDF2 import PdfReader
except ImportError:
    PdfReader = None


class PDFExtractor:
    """Extract text from PDF files"""
    
    def __init__(self):
        if PdfReader is None:
            raise ImportError(
                "PyPDF2 is required for PDF extraction. "
                "Install it with: pip install PyPDF2"
            )
    
    def extract_text(self, file_content: bytes) -> str:
        """
        Extract text from a PDF file
        
        Args:
            file_content: PDF file content as bytes
            
        Returns:
            Extracted text as a string
        """
        try:
            # Create a file-like object from bytes
            pdf_file = io.BytesIO(file_content)
            
            # Create PDF reader object
            pdf_reader = PdfReader(pdf_file)
            
            # Extract text from all pages
            text_content = []
            for page_num in range(len(pdf_reader.pages)):
                page = pdf_reader.pages[page_num]
                text = page.extract_text()
                if text:
                    text_content.append(text)
            
            # Join all pages with newlines
            full_text = '\n\n'.join(text_content)
            
            return full_text.strip()
            
        except Exception as e:
            raise Exception(f"Error extracting text from PDF: {str(e)}")
    
    def extract_from_file_path(self, file_path: str) -> str:
        """
        Extract text from a PDF file path
        
        Args:
            file_path: Path to the PDF file
            
        Returns:
            Extracted text as a string
        """
        try:
            with open(file_path, 'rb') as file:
                return self.extract_text(file.read())
        except FileNotFoundError:
            raise Exception(f"PDF file not found: {file_path}")
        except Exception as e:
            raise Exception(f"Error reading PDF file: {str(e)}")
    
    def get_page_count(self, file_content: bytes) -> int:
        """
        Get the number of pages in a PDF
        
        Args:
            file_content: PDF file content as bytes
            
        Returns:
            Number of pages
        """
        try:
            pdf_file = io.BytesIO(file_content)
            pdf_reader = PdfReader(pdf_file)
            return len(pdf_reader.pages)
        except Exception as e:
            raise Exception(f"Error getting page count: {str(e)}")
    
    def extract_page(self, file_content: bytes, page_number: int) -> str:
        """
        Extract text from a specific page
        
        Args:
            file_content: PDF file content as bytes
            page_number: Page number (0-indexed)
            
        Returns:
            Extracted text from the specified page
        """
        try:
            pdf_file = io.BytesIO(file_content)
            pdf_reader = PdfReader(pdf_file)
            
            if page_number < 0 or page_number >= len(pdf_reader.pages):
                raise ValueError(f"Invalid page number: {page_number}")
            
            page = pdf_reader.pages[page_number]
            return page.extract_text().strip()
            
        except Exception as e:
            raise Exception(f"Error extracting page {page_number}: {str(e)}")


# Convenience function for quick extraction
def extract_pdf_text(file_content: bytes) -> str:
    """
    Quick function to extract text from PDF
    
    Args:
        file_content: PDF file content as bytes
        
    Returns:
        Extracted text as a string
    """
    extractor = PDFExtractor()
    return extractor.extract_text(file_content)
